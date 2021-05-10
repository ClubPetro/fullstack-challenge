import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import InputMask, { Props } from 'react-input-mask';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {
  Button,
  CircularProgress,
  DialogActions,
  DialogContent,
  DialogContentText,
  FormControl,
  LinearProgress,
  TextFieldProps,
} from '@material-ui/core';

import { useToast } from '../../hooks/toast';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import Card from '../../components/Card';

import { Container, Header, NewPlace, Cards, DialogEdit } from './styles';

interface Country {
  label: string;
  flag: string;
  code: string;
}
interface RestCountriesAPI {
  translations: {
    pt: string;
  };
  flag: string;
}

interface Place {
  id: number;
  country: string;
  place: string;
  goal: number;
  goalFormatted: string;
  flag: string;
}

const Home: React.FC = () => {
  const autocompleteRef = useRef<HTMLDivElement>();
  const [countries, setCountries] = useState<Country[]>([]);
  const [country, setCountry] = useState<Country | null>();
  const [places, setPlaces] = useState<Place[]>([]);
  const [placeEdit, setPlaceEdit] = useState<Place | null>();
  const [openDialog, setOpenDialog] = useState(false);
  const [countriesLoading, setCountriesLoading] = useState(false);
  const [createLoading, setCreateLoading] = useState(false);
  const [cardsLoading, setCardsLoading] = useState(false);
  const [editLoading, setEditLoading] = useState(false);

  const { addToast } = useToast();

  const {
    register,
    handleSubmit,
    errors,
    setError,
    clearErrors,
    reset,
    control,
  } = useForm();

  const {
    register: dialogRegister,
    handleSubmit: dialogHandleSubmit,
    errors: dialogErrors,
    setError: dialogSetError,
    clearErrors: dialogClearErrors,
    reset: dialogReset,
    control: dialogControl,
  } = useForm();

  const formatGoal = useCallback((goal: number) => {
    const goalDate = new Date(goal * 1000);
    const goalMonth = `0${goalDate.getMonth() + 1}`.slice(-2);
    return `${goalMonth}/${goalDate.getFullYear()}`;
  }, []);

  const getPlaces = useCallback(async () => {
    setCardsLoading(true);
    try {
      const response = await api.get('/places');
      setCardsLoading(false);

      const placesFormatted = response.data.map((place: Place) => {
        return {
          ...place,
          goalFormatted: formatGoal(place.goal),
        };
      });
      setPlaces(placesFormatted);
    } catch (error) {
      setCardsLoading(false);

      if (error.response) {
        addToast({
          type: 'error',
          description: error.response.data.message,
        });
      } else {
        addToast({
          type: 'error',
          description: error.message,
        });
      }
    }
  }, [addToast, formatGoal]);

  useEffect(() => {
    setCountriesLoading(true);
    fetch('https://restcountries.eu/rest/v2/all?fields=translations;flag')
      .then(res => {
        setCountriesLoading(false);
        if (res.status === 200) {
          return res.json();
        }
        return [];
      })
      .then(json => {
        setCountries(
          json.map((countryResponse: RestCountriesAPI) => {
            return {
              label: countryResponse.translations.pt,
              flag: countryResponse.flag,
            };
          }),
        );
      })
      .catch(() => {
        setCountriesLoading(false);
        setError('country', {
          type: 'manual',
          message: 'Houve um erro ao buscar os países!',
        });
      });

    getPlaces();
  }, [getPlaces, setError]);

  const sortPlaces = useCallback((a: Place, b: Place) => {
    if (a.goal < b.goal) {
      return -1;
    }
    if (a.goal > b.goal) {
      return 1;
    }
    return 0;
  }, []);

  const resetForm = useCallback(() => {
    reset();

    setCountry(null);
    const clear = autocompleteRef.current?.getElementsByClassName(
      'MuiAutocomplete-clearIndicator',
    )[0] as HTMLButtonElement;
    if (clear) clear.click();
  }, [reset]);

  const handleCreatePlace = useCallback(
    async (data: Place) => {
      clearErrors();
      const currentDate = new Date();
      const goalSplit = data.goalFormatted.split('/');
      const goal = new Date(`${goalSplit[0]}-01-${goalSplit[1]}`);

      if (!goal.getTime()) {
        setError('goalFormatted', {
          type: 'manual',
          message: 'Informe um mês valido no formato mm/aaaa',
        });

        return;
      }

      if (goal <= currentDate) {
        setError('goalFormatted', {
          type: 'manual',
          message: 'Informe um mês posterior ao mês atual',
        });
        return;
      }

      const formData = {
        country: country ? country.label : null,
        place: data.place,
        goal: goal.getTime() / 1000,
        flag: country ? country.flag : null,
      };

      try {
        setCreateLoading(true);
        const response = await api.post('/places', formData);
        const createdPlace: Place = response.data;

        resetForm();

        createdPlace.goalFormatted = formatGoal(createdPlace.goal);
        setPlaces([...places, createdPlace].sort(sortPlaces));
        setCreateLoading(false);
      } catch (error) {
        setCreateLoading(false);

        if (error.response) {
          addToast({
            type: 'error',
            description: error.response.data.message,
          });
        } else {
          addToast({
            type: 'error',
            description: error.message,
          });
        }
      }
    },
    [
      addToast,
      clearErrors,
      country,
      formatGoal,
      places,
      resetForm,
      setError,
      sortPlaces,
    ],
  );

  const handleEditPlace = useCallback(
    async (data: Place) => {
      dialogClearErrors();
      const currentDate = new Date();
      const goalSplit = data.goalFormatted.split('/');
      const goal = new Date(`${goalSplit[0]}-01-${goalSplit[1]}`);

      if (!goal.getTime()) {
        dialogSetError('goal', {
          type: 'manual',
          message: 'Informe um mês valido no formato mm/aaaa',
        });

        return;
      }

      if (data.goal !== placeEdit?.goal && goal <= currentDate) {
        dialogSetError('goal', {
          type: 'manual',
          message: 'Informe um mês posterior ao mês atual',
        });
        return;
      }

      const formData = {
        place: data.place,
        goal: goal.getTime() / 1000,
      };

      try {
        setEditLoading(true);
        const response = await api.patch(`/places/${placeEdit?.id}`, formData);
        setEditLoading(false);
        setOpenDialog(false);
        setPlaceEdit(null);
        dialogReset();

        const placeEdited: Place = response.data;
        placeEdited.goalFormatted = formatGoal(placeEdited.goal);

        const index = places.findIndex(place => place.id === placeEdited.id);

        const newPlaces = [...places];
        newPlaces[index] = placeEdited;

        setPlaces([...newPlaces].sort(sortPlaces));
      } catch (error) {
        setEditLoading(false);

        if (error.response) {
          addToast({
            type: 'error',
            description: error.response.data.message,
          });
        } else {
          addToast({
            type: 'error',
            description: error.message,
          });
        }
      }
    },
    [
      addToast,
      dialogClearErrors,
      dialogReset,
      dialogSetError,
      formatGoal,
      placeEdit?.goal,
      placeEdit?.id,
      places,
      sortPlaces,
    ],
  );

  const handleOpenDialog = useCallback(
    (place: Place) => {
      dialogClearErrors();
      setPlaceEdit(place);
      setOpenDialog(true);
    },
    [dialogClearErrors],
  );

  const handleCloseDialog = useCallback(() => {
    setOpenDialog(false);
  }, []);

  const handleDelete = useCallback(
    async (id: number) => {
      try {
        setCardsLoading(true);
        const response = await api.delete(`/places/${id}`);
        setCardsLoading(false);
        if (response.status === 200) {
          setPlaces(places.filter(place => place.id !== id));
        }
      } catch (error) {
        setCardsLoading(false);

        if (error.response) {
          addToast({
            type: 'error',
            description: error.response.data.message,
          });
        } else {
          addToast({
            type: 'error',
            description: error.message,
          });
        }
      }
    },
    [addToast, places],
  );

  return (
    <Container>
      <Header>
        <img className="logo" src={logoImg} alt="Lugares" />
      </Header>
      <NewPlace>
        <form key={1} onSubmit={handleSubmit(handleCreatePlace)}>
          <Autocomplete
            options={countries}
            loading={countriesLoading}
            className="autocomplete"
            autoHighlight
            ref={autocompleteRef}
            getOptionLabel={option => option.label}
            onChange={(event, countrySelected) => {
              if (countrySelected !== null) {
                clearErrors('country');
              }
              setCountry(countrySelected);
            }}
            renderOption={option => (
              <>
                <span>
                  <img
                    src={option.flag}
                    alt={option.label}
                    style={{ marginRight: '8px', width: '30px' }}
                  />
                </span>
                {option.label}
              </>
            )}
            renderInput={params => (
              <FormControl className="formcontrol">
                <TextField
                  /* eslint-disable react/jsx-props-no-spreading */
                  {...params}
                  label="País"
                  variant="outlined"
                  placeholder="Selecione..."
                  name="country"
                  inputRef={register({
                    required: 'Selecione um país',
                  })}
                  InputProps={{
                    ...params.InputProps,
                    autoComplete: 'off',
                    endAdornment: (
                      <>
                        {countriesLoading ? (
                          <CircularProgress color="inherit" size={20} />
                        ) : null}
                        {params.InputProps.endAdornment}
                      </>
                    ),
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  error={!!errors.country}
                  helperText={!!errors.country && errors.country.message}
                />
              </FormControl>
            )}
          />

          <FormControl className="formcontrol">
            <TextField
              label="Local"
              variant="outlined"
              placeholder="Digite o local que deseja conhecer"
              name="place"
              id="place"
              inputRef={register({
                required: 'Informe um local',
              })}
              InputLabelProps={{
                shrink: true,
              }}
              error={!!errors.place}
              helperText={errors.place && errors.place.message}
            />
          </FormControl>

          <FormControl className="formcontrol">
            <Controller
              name="goalFormatted"
              control={control}
              defaultValue=""
              render={({ onChange }) => (
                <InputMask mask="99/9999" defaultValue="" onChange={onChange}>
                  {(inputProps: Props & TextFieldProps) => (
                    <TextField
                      {...inputProps}
                      label="Meta"
                      variant="outlined"
                      placeholder="mm/aaaa"
                      name="goalFormatted"
                      inputRef={register({
                        required: 'Informe uma meta',
                      })}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      error={!!errors.goalFormatted}
                      helperText={
                        errors.goalFormatted && errors.goalFormatted.message
                      }
                    />
                  )}
                </InputMask>
              )}
            />
          </FormControl>

          <Button
            type="submit"
            color="primary"
            className="submit-button"
            disabled={createLoading}
          >
            {createLoading ? (
              <CircularProgress size={24} className="buttonProgress" />
            ) : (
              'Adicionar'
            )}
          </Button>
        </form>
      </NewPlace>

      {cardsLoading && <LinearProgress style={{ marginBottom: '-4px' }} />}

      <Cards>
        {places.map(place => (
          <Card
            key={place.id}
            place={place}
            handleDelete={handleDelete}
            handleEdit={handleOpenDialog}
          />
        ))}
      </Cards>
      <DialogEdit open={openDialog} onClose={handleCloseDialog}>
        <form key={2} onSubmit={dialogHandleSubmit(handleEditPlace)}>
          {!!placeEdit && (
            <DialogContent>
              <DialogContentText className="countryImg">
                <img src={placeEdit.flag} alt={placeEdit.country} />
              </DialogContentText>
              <DialogContentText className="country-name">
                {placeEdit.country.toUpperCase()}
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                name="place"
                label="Local"
                defaultValue={placeEdit.place}
                inputRef={dialogRegister({
                  required: 'Informe um local',
                })}
                fullWidth
                error={!!dialogErrors.place}
                helperText={!!dialogErrors.place && dialogErrors.place.message}
              />

              <Controller
                name="goalFormatted"
                control={dialogControl}
                defaultValue={placeEdit.goalFormatted}
                render={({ onChange }) => (
                  <InputMask
                    mask="99/9999"
                    defaultValue={placeEdit.goalFormatted}
                    onChange={onChange}
                  >
                    {(inputProps: Props & TextFieldProps) => (
                      <TextField
                        {...inputProps}
                        margin="dense"
                        name="goalFormatted"
                        label="Meta"
                        placeholder="mm/aaaa"
                        defaultValue={placeEdit.goalFormatted}
                        inputRef={dialogRegister({
                          required: 'Informe uma meta',
                        })}
                        fullWidth
                        error={!!dialogErrors.goalFormatted}
                        helperText={
                          !!dialogErrors.goalFormatted &&
                          dialogErrors.goalFormatted.message
                        }
                      />
                    )}
                  </InputMask>
                )}
              />
            </DialogContent>
          )}

          <DialogActions>
            <Button onClick={handleCloseDialog} color="default">
              Cancelar
            </Button>
            <Button type="submit" color="primary" disabled={editLoading}>
              {editLoading ? <CircularProgress size={24} /> : 'Salvar'}
            </Button>
          </DialogActions>
        </form>
      </DialogEdit>
    </Container>
  );
};

export default Home;

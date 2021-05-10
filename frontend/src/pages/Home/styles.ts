import styled from 'styled-components';
import Dialog from '@material-ui/core/Dialog';

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

export const Header = styled.div`
  background: #000;
  height: 82px;
  width: 100%;
  box-shadow: 0 4px 3px 0 rgba(0, 0, 0, 0.25);
  position: relative;
  transition: 1s;

  .logo {
    width: 152px;
    margin-left: 53px;
    transition: 1s;
  }

  @media (max-width: 640px) {
    height: 56px;

    .logo {
      width: 100px;
      margin-left: 16px;
    }
  }
`;

export const NewPlace = styled.div`
  background: #4f9419;
  display: flex;
  align-items: flex-start;
  padding: 48px 16px 0;
  height: 203px;

  form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    width: 1296px;
    margin: 0 auto;

    .autocomplete {
      > div > div {
        border-radius: 7px;
        padding-bottom: 5px;
      }

      .formcontrol {
        input {
          padding-top: 14px;
          padding-bottom: 15px;
        }
      }
    }

    .formcontrol {
      label {
        position: relative;
        color: #fff;
        font-size: 20px;
        padding-left: 4px;
        margin-top: 8px;
        top: 6px;
        left: -14px;
      }

      label.Mui-error,
      p.Mui-error {
        color: #b60610;
      }

      > div > div {
        background: #fff;
        border-radius: 7px;
        padding-top: 0;
        padding-bottom: 0;

        input {
          padding-top: 14px;
          padding-bottom: 15px;
        }

        fieldset {
          border: none;
        }
      }

      &:nth-child(1) {
        width: 303px;
      }
      &:nth-child(2) {
        width: 455px;
      }
      &:nth-child(3) {
        width: 238px;
      }
    }

    .submit-button {
      width: 203px;
      height: 48px;
      border: none;
      border-radius: 7px;
      background: #006c18;
      color: #fff;
      font-size: 18px;
      line-height: 21px;
      padding: 16px 64px;
      font-weight: 400;
      text-transform: capitalize;
      margin-top: 28px;

      .buttonProgress {
        color: #fff;
        position: absolute;
        margin-top: -12;
        margin-left: -12;
        opacity: 1;
      }
    }
  }

  @media (max-width: 1296px) {
    padding: 6px 16px 24px;

    form {
      width: 780px;
    }
  }

  @media (max-width: 810px) {
    height: auto;

    form {
      width: 100%;

      .formcontrol,
      .autocomplete {
        width: 100% !important;
      }

      .submit-button {
        width: 100%;
      }
    }
  }
`;

export const Cards = styled.div`
  padding: 32px 12px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const DialogEdit = styled(Dialog)`
  .MuiDialog-paperWidthSm {
    max-width: 450px;
  }
  .MuiDialogContent-root {
    .countryImg {
      img {
        width: 60px;
      }
    }

    .country-name {
      color: #4f9419;
      line-height: 19px;
      font-weight: 700;
      padding: 8px 0;
      border-bottom: 1px solid #ababab;
    }
  }
`;

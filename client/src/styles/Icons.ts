import styled, { css } from 'styled-components';

import EditIcon from '@material-ui/icons/Edit';
import ClearIcon from '@material-ui/icons/Clear';

const IconStyle = css`
  cursor: pointer;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;

export const IconEdit = styled(EditIcon)`
  ${IconStyle}
`;

export const IconDelete = styled(ClearIcon)`
  ${IconStyle}
`;

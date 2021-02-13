import styled from 'styled-components';

export const Container = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 8px;
  margin: 16px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    img {
      width: 56px;
      margin: 16px 8px 8px;
    }

    .action {
      button {
        padding: 8px;
        display: inline-flex;
        font-size: 20px;
        text-decoration: none;
        color: #868686;
      }
    }
  }

  .country-name {
    color: #4f9419;
    line-height: 19px;
    font-weight: 700;
    padding: 8px;
    border-bottom: 1px solid #ababab;
  }

  .place-goal {
    margin: 40px 20px 0;

    div {
      & + div {
        margin-top: 12px;
      }
    }
  }
`;

import styled from "styled-components";

export const CartComponent = styled.div`
  width: 100%;
`;
export const CartItens = styled.section`
  max-width: 1200px;
  margin: 30px auto;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    margin: 10px 0;
    border: 1px solid #000;
    .cartImg {
      height: 70px;

      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
    button {
      padding: 5px 20px;
      background-color: #000;
      color: #fff;
      border: none;
      cursor: pointer;
      transition: 0.4s;

      &:hover {
        background-color: #fff;
        color: #000;
        border: 1px solid #000;
      }
    }
  }
`;

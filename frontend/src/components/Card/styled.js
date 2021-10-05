import styled from "styled-components";

export const Card = styled.section`
  width: 100%;

  div {
    max-width: 1200px;
    margin: 30px auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    li {
      list-style: none;
      width: 330px;
      height: 350px;
      border: 1px solid #000;
      margin: 5px;
      display: flex;
      align-items: center;
      flex-direction: column;

      h2 {
        font-size: 1rem;
        padding: 10px 0;
      }
      .img-card {
        width: 200px;
      }
      .img-card img {
        text-align: center;
      }
      span {
        padding-bottom: 5px;
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
  }
`;

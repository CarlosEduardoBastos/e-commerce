import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  background-color: #000;
  color: #fff;
  padding: 20px;

  .header-component {
    max-width: 1200px;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;

    .logo a {
      font-size: 1.5rem;
    }
    a {
      text-decoration: none;
      color: #fff;
      font-size: 1.3rem;
      margin: 0px 10px;
    }
    ul {
      display: flex;
      align-items: center;
    }
  }
`;

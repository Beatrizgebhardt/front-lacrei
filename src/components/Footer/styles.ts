import styled from "styled-components";
import { breakpoints } from "../../constants";
import ImagemFooter from "./../../public/images/imagem-footer.png";

export const Wrapper = styled.footer`
  background-color: #d9d9d9;
  justify-content: space-between;
  display: flex;
  padding: 10px 20px;
  position: absolute;
  box-sizing: border-box;
  bottom: 0;
  height: 100px;
  width: 100%;

  @media (max-width: ${breakpoints.medium}) {
    background: url(${ImagemFooter});
    background-position: top;
    background-size: cover;
    height: 220px;
    font-size: 14px;
    flex-direction: column;
    justify-content: space-around;
    color: white;
  }
`;

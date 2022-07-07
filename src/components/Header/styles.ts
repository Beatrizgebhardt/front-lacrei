import styled from "styled-components";
import imagemHeader from "./../../public/images/imagem-header.png";
import { breakpoints } from "../../constants";

export const Wrapper = styled.header`
  display: flex;
  height: 80px;
  padding: 50px;
  justify-content: space-between;

  @media (max-width: ${breakpoints.medium}) {
    background: url(${imagemHeader});
    height: 120px;
    background-position: top;
    background-size: cover;
    background-repeat-x: no-repeat;
    background-repeat-y: no-repeat;
  }
`;

export const Imagem = styled.img`
  height: 80px;

  @media (max-width: ${breakpoints.medium}) {
    height: 40px;
  }
`;

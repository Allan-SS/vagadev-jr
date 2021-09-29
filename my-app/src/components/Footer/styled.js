import styled from "styled-components";
import { primaryColor, secondaryColor } from "../../constants/colors";

export const ContainerFooter = styled.div`
  display: flex;
  color: white;
  background-color: ${primaryColor};
`;

export const ContainerLogo = styled.div`
  width: 30%;
  display: flex;
  justify-content: flex-end;
  background-color: ${secondaryColor};
`;

export const ImgLogo = styled.img`
  padding: 0.625rem 3rem;
`;

export const TextFooter = styled.p`
  font-weight: 400;
  padding: 1rem 3rem;
`;

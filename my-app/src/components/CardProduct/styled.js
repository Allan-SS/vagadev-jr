import styled from "styled-components";
import { primaryColor, secondaryColor } from "../../constants/colors";

export const ContainerCard = styled.div`
  width: 21.875rem;
  border-radius: 0.625rem;
  background-color: white;
  box-shadow: 0 0.25rem 1.25rem 0.5rem rgba(0, 0, 0, 0.07);
`;

export const ImgProduct = styled.img`
  width: 100%;
`;

export const ImgCard = styled.div`
  height: 70%;
`;

export const ProductCard = styled.div`
  height: calc(30% - 0.625rem);
  padding-bottom: 1.5rem;
  margin-top: 0.625rem;
  background-color: #f5f5f5;
  border-top: 0.125rem ${primaryColor} solid;
  border-radius: 0 0 0.625rem 0.625rem;
`;

export const TextCard = styled.div`
  height: 3rem;
  margin-top: 0.625rem;
  padding-left: 2rem;
  color: ${secondaryColor};
`;

export const NameProduct = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
`;

export const PriceProduct = styled.p`
  display: flex;
  height: 1.563rem;
  align-items: flex-end;
  font-size: 1.125rem;
  font-weight: 900;
`;

export const BtnBuyProduct = styled.button`
  width: 70%;
  padding: 0.625rem 2rem;
  display: flex;
  margin: 0 auto;
  font-weight: 900;
  font-size: 1rem;
  color: white;
  border: none;
  border-radius: 0.25rem;
  background-color: ${secondaryColor};

  :hover {
    cursor: pointer;
  }
`;

export const BtnProduct = styled.button`
  width: 70%;
  padding: 0.625rem 0;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 1rem;
  color: white;
  border: none;
  border-radius: 0.25rem;
  background-color: ${primaryColor};

  :hover {
    background-color: ${secondaryColor};
    cursor: pointer;
  }
`;

export const ImgBuying = styled.img`
  position: absolute;
  width: 5rem;
  margin: -4rem 0 0 7.5rem;
`;

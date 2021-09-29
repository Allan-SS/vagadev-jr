import styled from "styled-components";
import { primaryColor, secondaryColor } from "../../constants/colors";

export const ContainerCard = styled.div`
  /* border: 1px red solid; */
  width: 350px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 4px 20px 7px rgba(0, 0, 0, 0.07);
`;

export const ImgProduct = styled.img`
  width: 100%;
`;

export const ImgCard = styled.div`
  height: 70%;
  /* border: 1px red solid; */
`;

export const ProductCard = styled.div`
  height: calc(30% - 10px);
  padding-bottom: 1.5rem;
  margin-top: 10px;
  background-color: #f5f5f5;
  border-top: 2px ${primaryColor} solid;
  border-radius: 0px 0px 10px 10px;
`;

export const TextCard = styled.div`
  height: 3rem;
  margin-top: 10px;
  padding-left: 2rem;
  /* border: 1px red solid; */
  color: ${secondaryColor};
`;

export const NameProduct = styled.p`
  font-size: 14px;
  font-weight: 400;
`;

export const PriceProduct = styled.p`
  display: flex;
  height: 25px;
  align-items: flex-end;
  font-size: 18px;
  font-weight: 900;
`;

export const BtnBuyProduct = styled.button`
  width: 70%;
  padding: 10px 2rem;
  display: flex;
  margin: 0 auto;
  font-weight: 900;
  font-size: 16px;
  color: white;
  border: none;
  border-radius: 5px;
  background-color: ${secondaryColor};

    :hover{
    cursor: pointer;
  }

`

export const BtnProduct = styled.button`
  width: 70%;
  padding: 10px 0;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 16px;
  color: white;
  border: none;
  border-radius: 5px;
  background-color: ${primaryColor};

  :hover{
    background-color: ${secondaryColor};
    cursor: pointer;
  }
`;

export const ImgBuying = styled.img`
 position: absolute;
 width: 5rem;
 margin: -64px 0 0 120px;
`
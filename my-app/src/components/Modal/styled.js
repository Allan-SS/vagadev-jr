import styled from "styled-components";
import { secondaryColor } from "../../constants/colors";

export const ContainerModal = styled.div`
  position: fixed;
  z-index: 3;
  width: 100%;
  height: 100%;
  background: ${secondaryColor} 62%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(8, 65, 84, 0.62);
`;

export const ContainerConfirma = styled.div`
  position: relative;
  width: 25rem;
  height: 31.25rem;
  background: #ffffff;
  border-radius: 0.25rem;
`;

export const BtnClose = styled.img`
  position: absolute;
  left: 21.875rem;
  top: 0.25rem;

  :hover {
    cursor: pointer;
  }
`;

export const ContainerTextConfirma = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    width: 12.5rem;
    padding: 6rem 1rem;
    text-align: center;
    font-weight: 300;
    font-size: 1.375rem;
  }

  hr {
    width: 25%;
    margin: 0;
  }
`;

export const ImgConfirmBuy = styled.img`
  width: 50%;
  position: absolute;
  left: 6rem;
`;

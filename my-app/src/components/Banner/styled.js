import styled from "styled-components";
import { primaryColor, secondaryColor } from "../../constants/colors";

export const ContainerBanner = styled.div`
transform: translateY( 22rem) ;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;

  hr {
    width: 40%;
    background-color: ${secondaryColor};
    border: none;
    height: 0.063rem;
    margin: 0.25rem;
  }

  @media (max-width: 500px) {
    flex-wrap: wrap;
  }
`;

export const BannerCard = styled.div`
  width: 25rem;
  padding: 0 0.5rem;

  @media (max-width: 500px) {
    margin-bottom: 1.5rem;
  }
`;

export const ImgBanner = styled.img`
  width: 100%;
`;

export const TitleBanner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 24rem;
  position: absolute;
  z-index: 2;
  margin-top: -1rem;
  padding: 0.5rem;
  border-left: 0.5rem ${secondaryColor} solid;
  border-radius: 0 0 0.25rem 0.25rem;
  background-color: ${primaryColor};
  color: ${secondaryColor};
  font-weight: 700;
  font-size: 0.625rem;
`;

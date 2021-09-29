import styled from "styled-components";
import { primaryColor, secondaryColor } from "../../constants/colors";

export const ContainerSlider = styled.div`
  width: 100%;
  z-index: -1;
  position: absolute;
  color: #fff;

  .slick-next,
  .slick-prev {
    display: none !important;
  }

  .alignText{
    width: 31.25rem;
    text-align: end;
    flex-wrap: wrap;
  }

  @media (max-width: 450px){
    
  }

  `;

export const ImgSlider = styled.img`
  width: 100vw;
  
  @media (max-width: 450px){
    width: 230vw;
  }
  `;

export const ContainerTextSlider = styled.div`
width: 17%;
margin-top: -26.25rem;
position: absolute;
display: flex;
justify-content: flex-end;
  z-index: 1;
  text-shadow: 0.063rem 0.063rem 1.25rem #000000;

  @media (max-width: 450px){
    
  }

`;

export const NameSlider = styled.p`
  font-weight: 900;
  font-size: 2.5rem;
  display: block;

  @media (max-width: 450px){
    display: none;
  }
`;

export const PriceSlider = styled.p`
  color: ${primaryColor};
  font-weight: 900;
  font-size: 3.75rem;
  display: block;

  @media (max-width: 450px){
    display: none;
  }
`;

export const DescriptionSlider = styled.p`
  font-weight: 400;
  font-size: 0.875rem;
  display: block;
  @media (max-width: 450px){
    display: none;
  }
`;

export const ContainerButtonSlider = styled.div`
  background-color: ${secondaryColor};
  border-radius: 0 0 0 0.625rem;
  margin-top: 8rem;
`;

export const ContainerArrowSlider = styled.div`
  background-color: ${primaryColor};
  border-radius: 0 0 0 0.625rem;
  width: 3rem;
  transform: translate(78.9rem, -25rem) ;

  hr {
    width: 8rem;
    height: 0.063rem;
    margin: 7rem 0 0 -2.5rem ;
    transform: rotate(90deg);
    border: none;
    background-color: ${secondaryColor};
  }
`;

export const InitialsSlider = styled.p`
  padding-left: 2rem;
  margin: auto 0;
  transform: rotate(90deg);
  font-weight: 400;
  font-size: 1.125rem;
`;

export const IdSlider = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: 0.875rem;
`;

export const ArrowSlider = styled.img`
  background-color: ${secondaryColor};
  padding: 0.25rem;
  border-radius: 0 0 0 0.25rem;

  :hover{
    cursor: pointer;
  }
`;

export const ContainerArrow = styled.div`
  display: flex;
  justify-content: center;
`;


export const ContainerTextSliderMobile = styled.div`
width: 17%;

margin-top: -12rem;
position: absolute;
display: none;
  z-index: 1;
  background: rgba(0, 0, 0, 0.65);
  text-shadow: 0.063rem 0.063rem 1.25rem #000000;

  @media (max-width: 450px){
    display: block;
  }

.alignText{
    width: 100%;
    /* text-align: end;
    flex-wrap: wrap; */
  }
`;

export const NameSliderMobile = styled.p`
  font-weight: 900;
  font-size: 1.5rem;

`;

export const PriceSliderMobile = styled.p`
  color: ${primaryColor};
  font-weight: 900;
  font-size: 1.5rem;

`;

export const DescriptionSliderMobile = styled.p`
  font-weight: 400;
  font-size: 1rem;

`;

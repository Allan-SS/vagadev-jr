import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  ContainerSlider,
  ContainerTextSlider,
  DescriptionSlider,
  ImgSlider,
  NameSlider,
  PriceSlider,
  ContainerTextSliderMobile,
  NameSliderMobile,
  DescriptionSliderMobile,
  PriceSliderMobile,
} from "./styled";
import SlideScorpion from "../../assets/img/principal_banner_desktop.jpg";
import SlideRDRD from "../../assets/img/principal_banner_desktop_02.jpg";

export default class SimpleSlider extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 6000,
    };

    const Slides = [
      {
        id: "1",
        name: "MORTAL KOMBAT",
        initials: "MK",
        price: "299,99",
        description:
          "Mortal Kombat X combina uma apresentação cinemática única com uma jogabilidade totalmente nova. Os jogadores podem escolher pela primeira vez diversas variantes de cada personagem, afetando tanto a estratégia como o estilo de luta.",
        img: SlideScorpion,
      },
      {
        id: "2",
        name: "RED DEAD REDEMPTION 2",
        initials: "RDR2",
        price: "320,00",
        description:
          "RDR 2 é um prólogo do primeiro jogo, ou seja, é ambientado um pouco antes da história original. O game se passa em 1899, quando ocorre o declínio do Velho Oeste Americano. O personagem principal é Arthur Morgan, um criminoso membro da gangue Van der Linde, comandada por Dutch Van der Linde e uma das mais famosas dos Estados Unidos. Assim como John Marston, protagonista do primeiro Red Dead Redemption, sua missão é lutar com sua gangue e cometer crimes por todos os EUA.",
        img: SlideRDRD,
      },
    ];

    return (
      <div>
        <ContainerSlider>
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            {Slides.map((slide, index) => (
              <div key={index}>
                <>
                  <ImgSlider src={slide.img} alt={"Background"} />
                  <ContainerTextSlider>
                    <div className="alignText">
                      <NameSlider>{slide.name}</NameSlider>
                      <PriceSlider>R$ {slide.price}</PriceSlider>
                      <DescriptionSlider>{slide.description}</DescriptionSlider>
                    </div>
                  </ContainerTextSlider>
                  <ContainerTextSliderMobile>
                    <div className="alignText">
                      <NameSliderMobile>{slide.name}</NameSliderMobile>
                      <PriceSliderMobile>R$ {slide.price}</PriceSliderMobile>
                      <DescriptionSliderMobile>
                        {slide.description}
                      </DescriptionSliderMobile>
                    </div>
                  </ContainerTextSliderMobile>
                  {/* Todo: botões do slider */}
                </>
              </div>
            ))}
          </Slider>
        </ContainerSlider>
      </div>
    );
  }
}

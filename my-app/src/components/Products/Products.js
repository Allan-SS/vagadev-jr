import React from "react";
import CardProduct from "../CardProduct/CardProduct";
import { ContainerProducts, TextProduct } from "./styled";
import ImgCyberPunk from "../../assets/img/product-cyberpunk2077.png";
import ImgOutriders from "../../assets/img/product-outriders.png";
import ImgDonkeyKong from "../../assets/img/product-donkey-kong-country-tropical-freeze.png";
import iconProduct from "../../assets/icons/Group 6.svg";

const Products = (props) => {
  const Cards = [
    {
      name: "CYBERPUNK 2077",
      price: "200,00",
      img: ImgCyberPunk,
    },
    {
      name: "Outriders",
      price: "200,00",
      img: ImgOutriders,
    },
    {
      name: "Donkey Kong Country Tropical Freeze",
      price: "200,00",
      img: ImgDonkeyKong,
    },
  ];

  return (
    <ContainerProducts>
      <TextProduct>
        <img src={iconProduct} alt="iconProduct" />
        <h1>Produtos em destaque</h1>
      </TextProduct>
      <div id="ContainerCards">
        {Cards.map((card, index) => (
          <div id="Card" key={index}>
            <CardProduct
              counter={props.counter}
              setCounter={props.setCounter}
              setShowModal={props.setShowModal}
              showModal={props.showModal}
              card={card}
            />
          </div>
        ))}
      </div>
    </ContainerProducts>
  );
};

export default Products;

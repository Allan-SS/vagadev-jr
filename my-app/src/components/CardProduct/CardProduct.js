import React, { useState } from "react";
import ImgBuyProduct from "../../assets/img/image_6-removebg-preview 1.png";
import {
  ContainerCard,
  ImgCard,
  ProductCard,
  ImgProduct,
  BtnProduct,
  NameProduct,
  PriceProduct,
  TextCard,
  BtnBuyProduct,
  ImgBuying,
} from "./styled";

const CardProduct = (props) => {
  const [buyProduct, setBuyProduct] = useState(false);

  const buy = () => {
    setBuyProduct(!buyProduct);
    props.setShowModal(!props.showModal);
    props.setCounter(props.counter + 1);
  };

  return (
    <ContainerCard>
      <ImgCard>
        <ImgProduct src={props.card.img} alt={props.card.name} />
      </ImgCard>
      <ProductCard>
        <TextCard>
          <NameProduct>{props.card.name}</NameProduct>
          <PriceProduct>R$ {props.card.price}</PriceProduct>
        </TextCard>
        {buyProduct ? (
          <div>
            <BtnBuyProduct onClick={buy}>
              COMPRADO!
              <ImgBuying src={ImgBuyProduct} alt="Mario" />
            </BtnBuyProduct>
          </div>
        ) : (
          <BtnProduct onClick={buy}>COMPRAR</BtnProduct>
        )}
      </ProductCard>
    </ContainerCard>
  );
};

export default CardProduct;

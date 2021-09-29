import React from "react";
import {
  BtnClose,
  ContainerConfirma,
  ContainerModal,
  ContainerTextConfirma,
  ImgConfirmBuy,
} from "./styled";
import IconClose from "../../assets/icons/close_btn.svg";
import ImgBuyProduct from "../../assets/img/image_6-removebg-preview 1.png";

const Modal = (props) => {
  return (
    <ContainerModal id="opacity">
      <ContainerConfirma>
        <BtnClose
          src={IconClose}
          onClick={() => props.close(!props.showModal)}
          alt="Close"
        />
        <ContainerTextConfirma>
          <hr />
          <p>
            Pedido realizado <br /> com sucesso!
          </p>
          <hr />
        </ContainerTextConfirma>
        <ImgConfirmBuy src={ImgBuyProduct} alt="Mario" />
      </ContainerConfirma>
    </ContainerModal>
  );
};

export default Modal;

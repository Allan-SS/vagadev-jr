import React from "react";
import {
  ContainerHeader,
  ContainerIcons,
  Counter,
  Icons,
} from "./styled";
import LogoHeader from "../../assets/img/Logo_N1_Rush_fundo_escuro_bg_tranparente 1.png";
import iconPaperPlane from "../../assets/icons/paper-plane.svg";
import iconSearch from "../../assets/icons/search-solid.svg";
import iconShoppingBag from "../../assets/icons/shopping-bag-solid.svg";
import Menu from "../Menu/Menu";

const Header = (props) => {

  return (
    <ContainerHeader>
      <ContainerIcons>
        <Icons>
          <Menu />
        </Icons>
        <Icons>
          <img src={LogoHeader} alt={"Logo"} />
        </Icons>
      </ContainerIcons>
      <ContainerIcons>
        <Icons>
          <img src={iconPaperPlane} alt={"PaperPlane"} />
          <p className="responsive">CONTATO</p>
        </Icons>
        <hr className="responsive"/>
        <Icons className={"Border"}>
          <img src={iconSearch} alt={"Search"} />
          <p className="responsive">BUSCAR</p>
        </Icons>
        <hr className="responsive"/>
        <Icons className={"Border"}>
          <img src={iconShoppingBag} alt={"Bag"} />
          <Counter>{props.counter}</Counter>
        </Icons>
      </ContainerIcons>
    </ContainerHeader>
  );
};

export default Header;

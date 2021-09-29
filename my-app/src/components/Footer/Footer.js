import React from "react";
import { ContainerFooter, ContainerLogo, ImgLogo, TextFooter } from "./styled";
import LogoFooter from "../../assets/img/logo_header 1.png";

const Footer = () => {
  return (
    <ContainerFooter>
      <ContainerLogo>
        <ImgLogo src={LogoFooter} alt={"Logo"} />
      </ContainerLogo>
      <TextFooter>Agência N1 - Todos os direitos reservados</TextFooter>
    </ContainerFooter>
  );
};

export default Footer;

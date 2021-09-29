import React, { useRef, useState } from "react";
import iconHamburguer from "../../assets/icons/icon_hamburguer.svg";
import { BtnMenu, Nav, ContainerMenu, MenuBox } from "./styled";

const Menu = () => {
  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  return (
    <ContainerMenu>
      <MenuBox>
        <BtnMenu
          onClick={onClick}
          src={iconHamburguer}
          alt={"iconHamburguer"}
        />
        <Nav
          ref={dropDownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <ul id="ListFight">
            <span>Luta</span>
            <li>Mortal Kombat</li>
            <li>Smash Bros</li>
            <li>Killer Instict</li>
            <li>DBZ Kakarot</li>
          </ul>
          <ul id="ListAction">
            <span>Ação / Aventura</span>
            <li>GTA V</li>
            <li>Tomb Raider</li>
            <li>HALO</li>
            <li>Call of Duty</li>
          </ul>
          <ul id="ListRace">
            <span>Corrida</span>
            <li>NEED For SPEED</li>
            <li>Forza Horizon</li>
          </ul>
        </Nav>
      </MenuBox>
    </ContainerMenu>
  );
};

export default Menu;

import styled from "styled-components";
import {primaryColor, secondaryColor} from "../../constants/colors"

export const ContainerMenu = styled.div`
width: 5rem;
height: 70px;

@media (max-width: 500px) {
    width: 0.1rem;
    margin-right: 5rem;
  }
`


export const MenuBox = styled.div`
position: absolute;
width: 40rem;
margin: 1rem;
padding: 0.5rem;
font-size: 14px;
font-weight: 400;

ul{
    list-style-type: none;
}

span{
    padding: 20px;
    font-size: 14px;
    font-weight: 700;
    display: none;
}

li{
    padding: 10px 1rem;
    width: 100%;
    margin: 5px;
    border-radius: 10px;
    display: none;
}

.menu.active{
    opacity: 1;
    visibility: visible;
    li{
        display: block;
    
    :hover{
        cursor: pointer;
        background-color: ${primaryColor};
    }
}

span{
    display: block;
}
}

.menu{
    opacity: 0;
}

@media (max-width: 500px) {
    width: 15rem;
    z-index: 5;
  
  }
`

export const BtnBox = styled.div`
margin: 0 1rem;
width: 2rem;
height: 10%;
`

export const BtnMenu = styled.img`
padding: 0 2rem;
background-color: transparent;
border: none;

@media (max-width: 500px) {
    padding: 0 2rem 0 0;
  
  }


:hover{
cursor: pointer;
}
`
export const Nav = styled.nav`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr;
margin-top: 2rem;
padding: 2rem 1rem;
border: 2px ${primaryColor} solid ;
border-radius: 5px;
box-shadow: 10px 10px ${primaryColor};
background-color: ${secondaryColor};
position: relative;

::before{
    content: "";
    background-color: ${primaryColor};
    width: 30px;
    height: 30px;
    position: absolute;
    left: 2.8rem;
    top: -1rem;
    z-index: -1;
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}

#ListFight{
grid-column-start: 1;
}

#ListAction{
    grid-column-start: 2;
}

#ListRace{
    grid-column-start: 3;
}

@media (max-width: 500px) {
    grid-template-columns: 1fr;


    ::before{
    left: 2.8rem;
    top: -1rem;

}

    #ListFight{
grid-column-start: 1;
}

#ListAction{
    grid-column-start: 1;
}

#ListRace{
    grid-column-start: 1;
}
  }
`
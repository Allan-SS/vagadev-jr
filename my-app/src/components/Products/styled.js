import styled from "styled-components";
import { secondaryColor } from "../../constants/colors";

export const ContainerProducts = styled.div`
  transform: translateY(28rem);
  margin-bottom: 28rem;

  h1 {
    padding: 0 1rem;
    font-weight: 300;
    color: ${secondaryColor};
  }

  #ContainerCards {
    display: flex;
    flex-wrap: wrap;
    padding: 5rem;

    @media (max-width: 500px) {
    padding: 0;
    justify-content: center;
  }
  }

  #Card {
    padding: 1rem;
  }
`;

export const TextProduct = styled.div`
  display: flex;
  padding: 0 7rem;
`;

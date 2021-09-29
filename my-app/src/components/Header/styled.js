import styled from "styled-components";
import { primaryColor } from "../../constants/colors";

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;
  font-size: 0.875rem;
  width: 70%;
  margin: 0 auto;

  hr {
    margin: 2.5rem 0;
    height: 2rem;
  }

  .responsive {
    display: block;
  }

  @media (max-width: 500px) {
    margin: 0;
    .responsive {
      display: none;
    }
  }
`;

export const ContainerIcons = styled.div`
  display: flex;
`;

export const Icons = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  margin: 1rem;
  padding: 0.063rem 0.8rem;
  font-weight: 500;

  @media (max-width: 500px) {
    padding: 0;
    margin: 0.3rem;
  }
`;

export const Counter = styled.p`
  text-align: center;
  width: 1rem;
  background-color: ${primaryColor};
  border-radius: 1rem;
  display: block !important;
`;

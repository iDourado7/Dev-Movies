import { Link } from "react-router-dom"
import styled from "styled-components"

export const CardsLinks = styled(Link)`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

img{
    width: 200px;
    height: 300px;
    border-radius: 30px;
    border: 4px solid transparent;
    transition: border-color 0.4s ease, transform 0.4s ease;
    cursor: pointer;

   @media (max-width: 1024px ) {
    width: 182px;
    height: 271px;
    }
   @media (max-width: 768px ) {
        width: 168px;
        height: 238px;
    }
    @media (max-width: 450px) {
        width: 150px;
        height: 220px;
    }
    @media (max-width: 375px) {
        width: 130px;
        height: 195px;
    }
   @media (max-width: 320px ) {
        width: 141px;
        height: 192px;
    }

    &:hover{
      border-color: #fff; 
      transform: scale(1.03);
    }
    }

h3{
    color: #fff;
    font-size: 20px;
    margin-top: 20px;

    @media (max-width: 1024px) {
            font-size: 20px;
        }

    @media (max-width: 768px) {
            font-size: 17px;
    }

    @media (max-width: 450px) {
            font-size: 13px;
    }
    @media (max-width: 320px) {
            font-size: 10px;
    }
}
`
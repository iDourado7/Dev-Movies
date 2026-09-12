import styled, { css } from "styled-components";

const ButtonStyle = css`
border: 4px solid #fff;
border-radius: 30px;
background: transparent;
padding: 10px 20px;
color: #fff;
font-size: 20px;
font-weight: 500;
cursor: pointer;

@media (max-width: 1024px) {
font-size: 18px;
}

@media (max-width: 768px) {
font-size: 15px;
}

@media (max-width: 450px) {
font-size: 10px;
padding: 3px 16px;

}

@media (max-width: 320px) {
font-size: 6px;
padding: 4px 10px

}

&:hover{
    background-color: #fff;
    color: red;
}
`
export const ButtonRed = styled.button`
${ButtonStyle}

border: 4px solid transparent;
background: red;
box-shadow: 0px 0px 7px 8px rgb(255 0 0 / 30% );
transition: all 0.2s;

&:hover {
box-shadow: 0px 0px 7px 15px rgb(255 0 0 / 30% );
background: red;
color: #fff;
transform: scale(1.1);
transition: all 0.2s;
}

&:active{
transform: scale(0.9);
transition: all 0.2s;
}
`
export const ButtonWhite = styled.button`
${ButtonStyle}
transition: all 0.2s;

&:hover {
  transform: scale(1.1);
  transition: all 0.2s;
}

&:active {
  transform: scale(0.9);
  transition: all 0.2s;
}
`
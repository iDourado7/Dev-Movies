import { Link } from "react-router-dom";
import styled from "styled-components";

export const Head = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 40px 0;

button{
color: #fff;
font-size: 20px;
font-weight: 500;
padding: 7px 20px;
border-radius: 30px;
border: 3px solid #fff;
background-color: transparent;
position: absolute;
top: 32%;
left: 54px;
cursor: pointer;
transition: all 0.3s;
        
@media (max-width: 450px) {
    font-size: 12px;
    top: 17px;
    left: 2%;
}

&:hover{
    background-color: #fff;
    color: red;
    border: 3px solid #fff;
    transform: scale(1.1);
    transition: all 0.3s;
}
}

h1{
color: #fff;
font-size: 30px;
font-weight: 700;
margin: 0;

@media (max-width: 450px) {
    font-size: 22px;
    position: relative;
    top: 37px;
    
}
}
`

export const Container = styled.div`
padding: 23px 15px 10px;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
gap: 15px;

@media (max-width: 320px) {
    grid-template-columns: 1fr;
    gap: 10px;
    padding: 15px 10px 10px;
    justify-items: center;
  }



h3{
    font-size: 17px;
    font-weight: 700;
    color: #fff;
    text-align: center;
    margin: 15px 0 20px 0;
}
`
export const CardsLink = styled(Link)`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

img{
    width: 200px;
    height: 375px;
    border-radius: 30px;
    border: 4px solid transparent;
    transition: border-color 0.4s ease, transform 0.4s ease;
    cursor: pointer;

   @media (max-width: 320px ) {
        width: 100px;
        height: 100px;
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
}
`

import { motion } from "motion/react";
import styled from "styled-components";


export const Background = styled.div`
background-image: url(${props => props.$img});
height: 60vh;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
position: relative;

@media (max-width: 1024px) {
    height: 50vh;
}
@media (max-width: 768px) {
    height: 40vh;
}
@media (max-width: 320px) {
    height: 21vh;
}

&:before{
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
}

&:after{
    content: '';
    position: absolute;
    height: 120px;
    width: 100%;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(to top, #000, rgba(0, 0, 0, 0));

}
`

export const Container = styled(motion.div)`
display: flex;
justify-content: center;
align-items: flex-start;
height: 100%;
max-width: 1200px;
margin-top: -100px;
position: relative;


@media (max-width: 320px) {
margin-top: -28px;

}
`
export const Card = styled.div`
padding: 28px;
display: flex;
align-items: flex-start;
height: 100%;
z-index: 2;


img{
    width: 350px;
    border-radius: 30px;

    @media (max-width: 1024px) {
        width: 340px;
        height: 497px;
    }

    @media (max-width: 768px) {
        width: 264px;
        height: 360px;
    }
    @media (max-width: 450px) {
        width: 158px;
        height: 275px;
        position: relative;
        left: -7px;
    }
    @media (max-width: 320px) {
        width: 118px;
        height: 201px;
        margin-left: 9px;
    }
}
`
export const Button = styled(motion.button)`

color: #fff;
font-size: 20px;
font-weight: 500;
padding: 7px 20px;
border-radius: 30px;
border: 3px solid #fff;
background-color: transparent;
position: absolute;
top: -7%;
left: 5%;
cursor: pointer;
transition: all 0.3s;
z-index: 3;

@media (max-width: 1024px) {
    top: -7%;
    left: 4%;
}

@media (max-width: 768px) {
    top: -7%;
    left: 4%;
    font-size: 15px;
}
 
@media (max-width: 450px) {
    top: -4%;
    left: 5%;
    font-size: 12px;
}

@media (max-width: 320px) {
        top: -4%;
        left: 5%;
        font-size: 8px;
        padding: 7px 13px;
        margin-right: -3px;
}

&:hover{
    background-color: #fff;
    color: red;
    border: 3px solid #fff;
    transform: scale(1.1);
    transition: all 0.3s;
}
`

export const Info = styled.div`
padding: 20px;
width: 60%;
z-index: 2;
display: flex;
align-items: flex-start;
flex-direction: column;

  @media (max-width: 450px ) {
        padding-right: 36px;
        width: 100%;
        position: relative;
        right: 32px;
} 
  @media (max-width: 320px ) {
        padding-right: 36px;
        width: 53%;
        position: relative;
        right: 44px;
} 

h2{
    font-size: 40px;
    font-weight: 700;
    color: #fff;

    @media (max-width: 768px ) {
    font-size: 30px;
}
    @media (max-width: 450px ) {
    font-size: 15px;
    margin-top: 6px;
}
}

p{
    font-size: 17px;
    font-weight: 700;
    color: #fff;
    margin: 20px 0 30px;

    @media (max-width: 768px ) {
        font-size: 13px;
  }
    @media (max-width: 450px ) {
        font-size: 8px;
        margin-bottom: 17px;
  }
    @media (max-width: 320px ) {
        font-size: 7px;
        margin-bottom: 17px;
  }
}

`
export const ContainerVideos = styled.div`

display: flex;
align-items: center;
justify-content: center;
padding: 20px;
width: 100%;
flex-direction: column;


div{
display: flex;
flex-direction: column;
max-width: 1000px;
width: 100%;
height: 100%;
margin: 30px 0;

@media (max-width: 1024px) {
    width: 83%;
    margin-left: 10px;
}
}

h4{
font-size: 20px;
font-weight: 700;
color: #fff;
margin-bottom: 15px;

 @media (max-width: 450px ) {
        font-size: 13px;
  }
}

iframe{
border: none;
border-radius: 30px;
}
`

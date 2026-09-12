import styled from "styled-components";
import { motion } from "motion/react";

export const Background = styled.div`
background-image: url(${props => props.$img});
height: 100vh;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
position: relative;

@media (max-width: 1024px) {
    min-height: 100vh;
}
@media (max-width: 768px) {
    min-height: 100vh;
}
@media (max-width: 450px) {
     min-height: 100vh;
}
@media (max-width: 320px) {
     min-height: 100vh;
}


&::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
}

&:after {
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
align-items: center;
justify-content: space-evenly;
height: 100%;
max-width: 1500px;

@media (max-width: 1024px) {
    gap: 90px;
}


`
export const Info = styled.div`
padding: 20px;
width: 50%;
z-index: 2;
position: relative;
left: 40px;
margin-top: 40px;

@media (max-width: 1024px) {
margin-bottom: 77px;
}
@media (max-width: 768px) {
margin-bottom: 71px;
}
@media (max-width: 450px) {
margin: 0 16px 33px -18px;
}
@media (max-width: 320px) {
margin: 0 16px 87px -18px;
}

h1{
color: #fff;
font-size: 50px;
font-weight: 700;

@media (max-width: 1024px) {
font-size: 40px;
}

@media (max-width: 768px) {
font-size: 35px;
margin-right: 50px;
}

@media (max-width: 450px) {
font-size: 18px;
margin-right: 50px;
}
@media (max-width: 320px) {
font-size: 13px;
width: 100%
}

}

p{
color: #fff;
font-size: 17px;
font-weight: 500;
margin: 20px 0 30px;

@media (max-width: 1024px) {
font-size: 15px;
}

@media (max-width: 768px) {
font-size: 13px;
display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
overflow: hidden;
}

@media (max-width: 450px) {
font-size: 13px;
margin: 14px 0 20px;
}

}
@media (max-width: 320px) {
font-size: 11px;

}
`
export const ContainerButtons = styled.div`
display: flex;
gap: 30px;

@media (max-width: 450px) {
font-size: 8px;
display: flex;
gap: 16px;
}
@media (max-width: 320px) {
display: flex;
gap: 10px;
}
`
export const Card = styled.div`
z-index: 2;
margin-top: 40px;

img{
height: 500px;
border-radius: 30px;
position: relative;
right: 50px;

@media (max-width: 1024px) {
 height: 390px;
 margin-bottom: 70px;
}

@media (max-width: 768px) {
 height: 320px;
 margin-bottom: 90px;
 margin-left: 50px;
}

@media (max-width: 450px) {
width: 130px;
height: 213px;
margin-bottom: 95px;
margin-left: 7px;
}


@media (max-width: 320px) {
height: 188px;
margin-bottom: 142px;
margin-left: -4px;
border-radius: 15px;
}

}

`
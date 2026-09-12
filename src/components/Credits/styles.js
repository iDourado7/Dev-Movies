import styled from "styled-components";

export const Title = styled.h3`
font-size: 28px;
font-weight: 700;
color: #fff;

@media (max-width: 768px ) {
    font-size: 20px; 
}

@media (max-width: 450px ) {
    font-size: 15px; 
}
@media (max-width: 320px ) {
    font-size: 11px; 
}
`
export const Container = styled.div`
display: flex;
margin-top: 20px;
gap: 18px;

@media (max-width: 1024px ) {
    width: 98px;
    height: 146px;
}
   @media (max-width: 768px ) {
     width: 70px;
    height: 108px;
}
   @media (max-width: 450px ) {
     margin-top: 15px;
     gap: 1px;
    
}
 

img{
width: 120px;
height: 200px;
border-radius: 30px;
object-fit: cover;

@media (max-width: 1024px ) {
    width: 98px;
    height: 146px;
}

   @media (max-width: 768px ) {
     width: 70px;
    height: 108px;
}
   @media (max-width: 450px ) {
     width: 38px;
    height: 60px;
    display: flex;
}

   @media (max-width: 320px ) {
     width: 33px;
    height: 50px;
    display: flex;
}
}

p{
    text-align: center;
    margin: 5px 0 0;
    width: 100%;
    box-sizing: border-box;
    overflow-wrap: break-word;

    @media (max-width: 450px ) {
        font-size: 9px;
        line-height: 1.2;
    }
    @media (max-width: 320px ) {
        font-size: 7px;
    }

}
`
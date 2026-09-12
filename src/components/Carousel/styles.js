import { Link, Links } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
position: relative;
margin-bottom: 40px; 

.header-section{
    display: flex;
    justify-content: space-between;   /* 👈 empurra h2 pra esquerda e Link pra direita */
    align-items: center;
    

    h2{
        margin: 0;
        font-size: 25px;
        color: #fff;
        margin: 45px 30px 35px;

        @media (max-width: 1024px) {
            font-size: 24px;
        }
        @media (max-width: 768px) {
            font-size: 20px;
        }
        @media (max-width: 450px) {
            font-size: 16px;
            margin-bottom: 9px;
        }
        @media (max-width: 320px) {
            font-size: 13px;
            margin-bottom: 9px;
        }
    }

    a{
        color: #fff;
        text-decoration: none;
        font-size: 20px;
        transition: opacity 0.3s ease;
        margin: 53px 57px 15px;
        background-color: transparent;
        border: 2px solid #fff;
        border-radius: 30px;
        padding:  7px 15px;
        transition: all 0.3s;

        @media (max-width: 1024px) {
            margin-right: 3%;
            font-size: 16px;
        }
        @media (max-width: 768px) {
            margin-right: 3%;
            font-size: 14px;
        }
        
        @media (max-width: 450px) {
            margin-right: 10%;
            font-size: 10px;
        }
        @media (max-width: 320px) {
            margin-right: 9%;
        font-size: 10px;
        padding: 3px 14px;
        }
        
        &:hover{
            background-color: #fff;
            color: red;
            border: 2px solid #fff;
            transform: scale(1.1);
            transition: all 0.3s;
        }
        &:active{
        transform: scale(0.9);
        transition: all 0.2s;
        }   
    }
}

.swiper{
    width: 100%;
    
  }

  .swiper-wrapper{
    display: flex;
    padding-top: 10px;
}

/* força explicitamente */
 .swiper-slide{
    width: auto;
    flex-shrink: 0;
  }

.swiper-button-prev,
.swiper-button-next{
    color: #fff;
    background: rgba(0, 0, 0, 0.4);
    width: 60px;
    height: 60px;
    border-radius: 30%;
    transition: background 0.4s;
    top: 40%;
    font-size: 11%;

    @media (max-width: 320px) {
              top: 45%;
        }

    &:hover{
        background: rgba(0, 0, 0, 0.8);
    }

    .swiper-navigation-icon{
    width: 35px;
    height: 35px;

     @media (max-width: 320px) {
             width: 20px;
             height: 20px;
        }
    }
    
}

.swiper-button-prev{
    left: 35px;

    @media (max-width: 320px) {
             left: 17px;
             height: 45px;
             width: 45px;
        }
}
.swiper-button-next{
    right: 35px;
    
    @media (max-width: 320px) {
              right: 17px;
              height: 45px;
              width: 45px;
        }
}

/* opcional: esconder as setas quando não há como navegar */
.swiper-button-disabled{
    opacity: 0.3;
    cursor: not-allowed;

}
`



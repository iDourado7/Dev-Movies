import styled from "styled-components";

export const Background = styled.div`
height: 100vh;
width: 100vw;
background-color: rgba(0, 0, 0, 0.7);
z-index: 999;
position: absolute;
display: flex;
justify-content: center;
align-items: center;

@media (max-width: 1024px) {
    height: 100vh;
}
@media (max-width: 768px) {
  height: 100vh;
}
@media (max-width: 320px) {
  height: 100vh;
}
`

export const Container = styled.div`
background: #000;
width: 70%;
height: 80vh;
position: absolute;
display: flex;
justify-content: center;
align-items: center;
padding: 40px;
max-width: 1300px;
border-radius: 30px;


@media (max-width: 1440px) {
    width: 80%;
    height: 85vh;
}
@media (max-width: 1024px) {
        width: 82%;
        margin-top: 5%;
        height: 100%
}
@media (max-width: 768px) {
        width: 90%;
        margin-top: 7%;
        height: 94%;
}
@media (max-width: 450px) {
    width: 104%;
    margin-top: 30px;
    height: 70%;
}
@media (max-width: 320px) {
    width: 100%;
    margin-top: 30px;
    height: 63%;
}


iframe{
    border: none;
    border-radius: 30px;
    width: 100%;
    height: 100%;

    @media (max-width: 320px) {
        height: 100%;
    }

}
`
export const Button = styled.button`
    height: 27px;
    width: 27px;
    background-color: red;
    color: #fff;
    border: none;
    border-radius: 50%;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    position: absolute;
    top: 16px;
    right: 16px;
    z-index: 2;

    @media (max-width: 450px) {
        top: 16px;
        right: 15px;
        height: 23px;
        width: 23px;
}
    @media (max-width: 320px) {
        top: 16px;
        right: 15px;
        height: 23px;
        width: 23px;
}
`
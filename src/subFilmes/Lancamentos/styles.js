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


h3{
    font-size: 17px;
    font-weight: 700;
    color: #fff;
    text-align: center;
    margin: 15px 0 20px 0;
}
`
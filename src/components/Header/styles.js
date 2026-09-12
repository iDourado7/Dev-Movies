import styled from "styled-components";

export const Container = styled.div`
box-sizing: border-box;
max-height: 80px;
z-index: 99;
position: fixed;
top: 0;
left: 0;
width: 100%;
padding: 20px;
background-color: ${props => props.$changeHeader ? '#000000' : 'transparent'};
transition: background-color 0.7s ease-in-out;
display: flex;
justify-content: space-between;
align-items: center;

@media (max-width: 320px) {
   max-height: 44px;
}

img{
width: 300px;
margin-top: 10px;
cursor: pointer;

@media (max-width: 1024px) {
    width: 185px;
}
@media (max-width: 768px) {
    width: 180px;
}
@media (max-width: 450px) {
    width: 130px;
    margin-bottom: 9px;
}
@media (max-width: 320px) {
    width: 94px;
    margin-bottom: 14px;
}
} 

`
export const Menu = styled.ul`
display: flex;
list-style: none;
gap: 50px;
position: relative;
right: 20px;
bottom: 2px;

@media (max-width: 1024px) {
gap: 40px;
    
}

@media (max-width: 768px) {
gap: 33px;
    
}

@media (max-width: 450px) {
gap: 22px;
width: 144px;
}

@media (max-width: 320px) {
gap: 15px;
width: 92px;
margin-bottom: 7px;

}
`
export const Li = styled.li`
font-weight: 600;
font-size: 25px;
cursor: pointer;
position: relative;

@media (max-width: 1024px) {
    font-size: 17px;
    
}
@media (max-width: 768px) {
    font-size: 15px;
    
}
@media (max-width: 450px) {
    font-size: 13px;
    
}
@media (max-width: 320px) {
    font-size: 10px;
    
}



a{
    color: #fff;
    text-decoration: none;
}


&:after{
    content: '';
    height: 3px;
    width: ${props => props.$active ? '100%' : 0} ;
    background-color: #189b20;
    position: absolute;
    bottom: -10px;
    transition: width 0.5s ease-in-out;
    //left: 0;
    left: 50%;
    transform: translateX(-50%);
    
}

&:hover:after{
    width: 100%;
}
`
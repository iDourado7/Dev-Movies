import styled from "styled-components";

export const Container = styled.div`
display: flex;
margin-top: 30px;
gap: 17px;

@media (max-width: 450px ) {
    margin-top: 20px;
}
@media (max-width: 320px ) {
        margin-top: 20px;
        display: flex;
        gap: 8px;
        
}

span{
    padding: 6px 20px;
    border: 2px solid #fff;
    border-radius: 30px;
    font-size: 16px;
    font-weight: 700;
    background-color: #000;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;

@media (max-width: 1024px ) {
     font-size: 13px;
}

@media (max-width: 768px ) {
     font-size: 11px;
     padding: 5px 14px;
}
@media (max-width: 450px ) {
     font-size: 7px;
     padding: 4px 5px;
}
@media (max-width: 320px ) {
     font-size: 7px;
     padding: 4px 11px;
}
}

`
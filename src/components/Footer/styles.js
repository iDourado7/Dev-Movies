import styled from "styled-components"

export const FooterContainer = styled.footer`

    background-color: #141414;
    color: #fff;
    padding: 50px 60px 20px;
    margin-top: 60px;

    .footer-content {
        display: flex;
        justify-content: space-around;
        width: 100%;
        max-width: 1500px;
        margin: 0 auto;
        padding-bottom: 30px;
        border-bottom: 2px solid #333;
        box-sizing: border-box;
        

         @media (max-width: 1024px) {
            width: 100%;
            max-width: 100%;
            margin: 0;
            padding: 0 5% 30px;
            gap: 60px;
        }
         @media (max-width: 768px) {
            width: 100%;
            max-width: 100%;
            margin: 0;
            padding: 0 4% 30px;
            gap: 30px;
        }
         @media (max-width: 450px) {
            width: 100%;
            max-width: 100%;
            margin: 0;
            padding: 0 5% 30px;
            flex-direction: column;
            align-items: center;
            gap: 25px;

        }

        @media (max-width: 320px) {
            width: 100%;
            max-width: 100%;
            margin: 0;
            padding: 0 3% 30px;
            gap: 20px;
        }
    }

    .footer-col, .footer-col-2 {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
        gap: 10px;
        min-width: 160px;
        text-align: center;

        h4 {
            font-size: 16px;
            margin: 0px 0px 8px 0px;
            color: #fff;

           
            @media (max-width: 450px) {
                font-size: 17px;
            }
        }

        p {
            color: #888;
            font-size: 13px;
            margin: 0px;
        }
    }

    .footer-col-2 h4 {
        font-size: 20px;
        margin: 0 0 10px 0;
        color: #fff;

        @media (max-width: 450px) {
            font-size: 17px;
        }
    }

    .links-row {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;

        a {
            color: #aaa;
            text-decoration: none;
            font-size: 14px;
            transition: color 0.3s;

            @media (max-width: 450px) {
                font-size: 13px;
                gap: 10px;
            }

            &:hover {
                color: #fff;
            }
        }

        span {
            color: #fff;
        }
    }

    .footer-bottom {
        text-align: center;
        padding-top: 20px;

        p {
            color: #666;
            font-size: 13px;
            margin: 0;
        }
    }
`
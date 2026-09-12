import { ButtonRed, ButtonWhite } from "./styles";

export default function Button({children, one, ...props}){
    return (
        <>
        {
        one ? (<ButtonRed {...props}>{children}</ButtonRed>)
            : (<ButtonWhite {...props}>{children}</ButtonWhite>)
        }
        </>
    )
}
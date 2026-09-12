import UrlImage from "../../utils/urlApi"
import { Container, Title } from "./styles"

export default function Credit ({credits}) {
    return (
        <>
        <Title>Atores</Title>

         {credits && (
        <Container>
            {credits.slice(0,5).map(item => (
                <div key={item.id}>
                    <img src={UrlImage(item.profile_path)}/>
                    <p>{item.name}</p>
                </div>
            ))}
        </Container>
        )}

        
        </>
    )
}
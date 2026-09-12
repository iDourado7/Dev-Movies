import { Container } from "./styles"

export default function Genres({genres}) {
    return (
        <Container>
            {genres && genres.map(item => (<span key={item.id}>#{item.name}</span>))}
        </Container>
    )
}
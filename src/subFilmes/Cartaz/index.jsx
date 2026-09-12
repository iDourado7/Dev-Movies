import { useEffect, useState } from "react"
import api from '../../services/ApiTmdb'
import { CardsLink, Container, Head } from "./styles"
import UrlImage from "../../utils/urlApi"
import { useNavigate } from "react-router-dom"
import CardLink from "../../components/CardLinks"


export default function CartazMovies() {

    const navigate = useNavigate()

    const [cartaz, setCartaz] = useState([])

    useEffect(() => {
       async function GetFilmes(){
        const {data : {results}} = await api.get('/movie/now_playing')
        setCartaz(results)
       }
       GetFilmes()
    },[])
    
    return (
        <>
        <Head>

        <button onClick={() => navigate('/filmes')}>Voltar</button>
        <h1>Em Cartaz nos cinemas </h1>

        </Head>
        <Container>
            
           {cartaz && cartaz.map((item, index) => (
            
            <CardLink key={index} item={item}/>
            
           ))}
        </Container>
        </>
    )
}
                    
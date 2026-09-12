import { useEffect, useState } from "react"
import api from '../../services/ApiTmdb'
import { Container, Head } from "./styles"
import UrlImage from "../../utils/urlApi"
import { useNavigate } from "react-router-dom"
import CardLink from "../../components/CardLinks"

export default function BemAvaliadosMovies() {

    const navigate = useNavigate()

    const [bemAvaliados, setBemAvaliados] = useState([])

    useEffect(() => {
       async function GetFilmes(){
        const {data : {results}} = await api.get('/movie/top_rated')
        setBemAvaliados(results)
       }
       GetFilmes()
    },[])
    
    return (
        <>
        <Head>

        <button onClick={() => navigate('/filmes')}>Voltar</button>
        <h1> Mais bem Avaliados </h1>

        </Head>
        <Container>
            
           {bemAvaliados && bemAvaliados.map((item, index) => (

            <CardLink key={index} item={item}/>
           ))}
        </Container>
        </>
    )
}


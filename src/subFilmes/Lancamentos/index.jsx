import { useEffect, useState } from "react"
import api from '../../services/ApiTmdb'
import { Container, Head } from "./styles"
import UrlImage from "../../utils/urlApi"
import { useNavigate } from "react-router-dom"
import CardLink from "../../components/CardLinks"

export default function LancamentosMovies() {

    const navigate = useNavigate()

    const [lancamento, setLancamento] = useState([])

    useEffect(() => {
       async function GetFilmes(){
        const {data : {results}} = await api.get('/movie/upcoming')
        setLancamento(results)
       }
       GetFilmes()
    },[])
    
    return (
        <>
        <Head>

        <button onClick={() => navigate('/filmes')}>Voltar</button>
        <h1>Lançamentos </h1>

        </Head>
        <Container>
            
           {lancamento && lancamento.map((item, index) => (

            <CardLink key={index} item={item}/>

           ))}
        </Container>
        </>
    )
}
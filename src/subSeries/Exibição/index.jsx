import { useEffect, useState } from "react"
import api from '../../services/ApiTmdb'
import { Container, Head } from "./styles"
import UrlImage from "../../utils/urlApi"
import { useNavigate } from "react-router-dom"
import CardLink from "../../components/CardLinks"

export default function ExibicaoSeries() {

    const navigate = useNavigate()

    const [exibicao, setExibicao] = useState([])

    useEffect(() => {
       async function GetSeries(){
        const {data : {results}} = await api.get('tv/airing_today')
        setExibicao(results)
       }
       GetSeries()
    },[])
    
    return (
        <>
        <Head>

        <button onClick={() => navigate('/series')}>Voltar</button>
        <h1> Séries no Ar </h1>

        </Head>
        <Container>
            
           {exibicao && exibicao.map((item, index) => (

            <CardLink key={index} item={item} tipo="tv"/>
           ))}
        </Container>
        </>
    )
}
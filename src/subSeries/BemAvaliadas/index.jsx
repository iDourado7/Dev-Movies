import { useEffect, useState } from "react"
import api from '../../services/ApiTmdb'
import { Container, Head } from "./styles"
import { useNavigate } from "react-router-dom"
import CardLink from '../../components/CardLinks'

export default function BemAvaliadosSeries() {

    const navigate = useNavigate()

    const [bemAvaliados, setBemAvaliados] = useState([])

    useEffect(() => {
       async function GetSeries(){
        const {data : {results}} = await api.get('/tv/top_rated')
        setBemAvaliados(results)
       }
       GetSeries()
    },[])
    
    return (
        <>
        <Head>

        <button onClick={() => navigate('/series')}>Voltar</button>
        <h1> As Séries mais bem Avaliadas</h1>

        </Head>
        <Container>
            
           {bemAvaliados && bemAvaliados.map((item, index) => (

            <CardLink key={index} item={item} tipo="tv"/>
           ))}
        </Container>
        </>
    )
}


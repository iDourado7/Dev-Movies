import { useEffect, useState } from "react"
import api from '../../services/ApiTmdb'
import { Container, Head } from "./styles"
import UrlImage from "../../utils/urlApi"
import { useNavigate } from "react-router-dom"
import CardLink from "../../components/CardLinks"

export default function LancamentosSeries() {

    const navigate = useNavigate()

    const [lancamento, setLancamento] = useState([])

    useEffect(() => {
       async function GetSeries(){
        const {data : {results}} = await api.get('/tv/on_the_air')
        setLancamento(results)
       }
       GetSeries()
    },[])
    
    return (
        <>
        <Head>

        <button onClick={() => navigate('/series')}>Voltar</button>
        <h1>Lançamentos </h1>

        </Head>
        <Container>
            
           {lancamento && lancamento.map((item, index) => (

            <CardLink key={index} item={item} tipo="tv"/>
           ))}
        </Container>
        </>
    )
}
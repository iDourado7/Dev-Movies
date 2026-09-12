import { useEffect, useState } from "react"
import api from '../../services/ApiTmdb'
import { Container, Head } from "./styles"
import UrlImage from "../../utils/urlApi"
import { useNavigate } from "react-router-dom"
import CardLink from "../../components/CardLinks"

export default function PopularesSeries() {

    const navigate = useNavigate()

    const [populares, setPopulares] = useState([])

    useEffect(() => {
       async function GetSeries(){
        const {data : {results}} = await api.get('/tv/popular')
        setPopulares(results)
       }
       GetSeries()
    },[])
    
    return (
        <>
        <Head>

        <button onClick={() => navigate('/series')}>Voltar</button>
        <h1> Populares </h1>

        </Head>
        <Container>
            
           {populares && populares.map((item, index) => (

            <CardLink key={index} item={item} tipo="tv"/>
           ))}
        </Container>
        </>
    )
}

import { useState } from "react";
import { Background, Button, Card, Container, ContainerVideos, Info } from "./styles";
import { useEffect } from "react";
import {DetailMovie, CreditsMovie, VideosMovie, SimilarMovie, DetailSeries, CreditsSeries, VideosSeries, SimilarSeries} from "../../services/DataApi";
import {useParams, useNavigate} from 'react-router-dom'
import UrlImage from "../../utils/urlApi";
import Genres from "../../components/Genres";
import Credit from "../../components/Credits";
import Carousel from '../../components/Carousel'
import { useLoading } from "../../components/ContextLoading"


export default function Details() {

    const [detail, setDetail] = useState()
    const [credits, setCredits] = useState()
    const [videos, setVideos] = useState()
    const [similar, setSimilar] = useState()
    const { tipo, id } = useParams()
    const navigate = useNavigate()
    const { setCarregandoPagina } = useLoading()



    useEffect(() => {

        setDetail()
        setCredits()
        setVideos()
        setSimilar()

        const buscar = tipo === 'movie'
        
        ? Promise.all([DetailMovie(id), CreditsMovie(id), VideosMovie(id), SimilarMovie(id)])
        : Promise.all([DetailSeries(id), CreditsSeries(id), VideosSeries(id), SimilarSeries(id)])

      buscar.then(([a, b, c, d]) => {

        setDetail(a)
        setCredits(b)
        setVideos(c)
        setSimilar(d)
       
      }).catch((error) => console.error(error))

    }, [tipo,id])

     const carregando = !detail || !credits || !videos || !similar

    useEffect(() => {
        setCarregandoPagina(carregando)
    }, [carregando])

    if (carregando) {
        return null
    }

    return (
      <>
        <Background $img={UrlImage(detail.backdrop_path)}>
          
        </Background>

        

        <Container 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
        >
             <Button onClick={() => navigate(-1)}> ← Voltar</Button>
              
              <Card>
                <img src={UrlImage(detail.poster_path)}/>
              </Card>

              <Info>

                <h2>{detail.title || detail.name}</h2>
                <Genres genres={detail.genres}/>
                <p>{detail.overview}</p>

               <div>
                <Credit credits={credits}/>
               </div>

              </Info>
               </Container>
              <ContainerVideos>
                  {videos &&
                   videos.map((video) => (

                    <div key={video.id}>
                      <h4>{video.name}</h4>
                      <iframe 
                        src={`https://www.youtube.com/embed/${video.key}`}
                        height='400px'
                        width='100%'
                        title="Youtube Player Video"  
                        />
                    </div>
                  ))}
              </ContainerVideos>
              { similar && <Carousel info={similar} title={'Recomendações'} link={'/detalhes'} tipo={tipo}/> }
      </>        
    )
}
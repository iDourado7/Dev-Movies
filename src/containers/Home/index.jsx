import { Background, Card, Container, ContainerButtons, Info } from "./styles";
import { useState, useEffect  } from "react";
import Button from "../../components/Button";
import UrlImage from "../../utils/urlApi";
import Carousel from "../../components/Carousel";
import Trailer from "../../components/Trailer";
import {useNavigate} from 'react-router-dom'
import { MoviesPopular, Poster, SeriesPopular, TopMovies, TopSeries, UpComingMovies, SeriesAir } from "../../services/DataApi";
import { useLoading } from "../../components/ContextLoading";


export default function Home(){

    const [poster, setPoster] = useState()
    const [topMovies, setTopMovies] = useState()
    const [topSeries, setTopSeries] = useState()
    const [moviesPopular, setMoviesPopular] = useState()
    const [seriesPopular, setSeriesPopular] = useState()
    const [upComingMovies, setUpComingMovies] = useState()
    const [seriesAir, setSeriesAir] = useState()
    const [showTrailer, setShowTrailer] = useState(false)
    const navigate = useNavigate()
     const { setCarregandoPagina } = useLoading()

    useEffect(() => {

      Promise.all([

        Poster(),
        TopMovies(),
        TopSeries(),
        MoviesPopular(),
        SeriesPopular(),
        UpComingMovies(),
        SeriesAir()
      ]).then(([Poster, TopMovies, TopSeries, MoviesPopular, SeriesPopular, UpComingMovies, SeriesAir]) => {

        setPoster(Poster)
        setTopMovies(TopMovies)
        setTopSeries(TopSeries)
        setMoviesPopular(MoviesPopular)
        setSeriesPopular(SeriesPopular)
        setUpComingMovies(UpComingMovies)
       setSeriesAir(SeriesAir)
      }).catch((error) => console.error(error))

    },[])

    const carregando = !poster || !topMovies || !topSeries || !moviesPopular || !seriesPopular || !upComingMovies || !seriesAir

    useEffect(() => {
        setCarregandoPagina(carregando)
    }, [carregando])

    if (carregando) {
        return null
    }
      
    return (
        <>
        {poster && (
            
        <Background $img={UrlImage(poster.backdrop_path)}>

             {showTrailer && <Trailer posterId={poster.id} setShowTrailer={setShowTrailer}/>}

            <Container
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, ease: "easeInOut" }}
            >
            <Info>
                <h1>{poster.title}</h1>
                <p>{poster.overview}</p>

            <ContainerButtons>

                <Button one onClick={() => navigate(`/detalhes/movie/${poster.id}`)}>Assistir agora</Button>
                <Button onClick={() => setShowTrailer(true)} >Assistir ao trailer</Button>
                
            </ContainerButtons>

            </Info>

            <Card
            >
              <img src={UrlImage(poster.poster_path)} alt="poster-filme"/>
            </Card>
            </Container>

        </Background> 
    )}
        <Carousel info={upComingMovies} title={'Em Breve...'}/>
        <Carousel info={seriesAir}      title={'Séries em Alta'} tipo="tv"/>
        <Carousel info={topMovies}      title={'Top Filmes'}/> 
        <Carousel info={topSeries}      title={'Top Séries'} tipo="tv"/> 
        <Carousel info={moviesPopular}  title={'Filmes Populares'}/>
        <Carousel info={seriesPopular} title={'Séries populares'} tipo="tv"/>    
     </>
    )
}

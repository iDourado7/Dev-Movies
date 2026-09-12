import { useState } from "react";
import { Container } from "./styles";
import { useEffect } from "react";
import { EmCartaz, MoviesPopular, TopMovies, UpComingMovies } from "../../services/DataApi";
import Carousel from "../../components/Carousel";
import { useLoading } from "../../components/ContextLoading"


export default function Movies() {
    const [emCartaz, setEmCartaz] = useState()
    const [upComingMovies, setUpComingMovies] = useState()
    const [topMovies, setTopMovies] = useState()
    const [moviesPopulares, setMoviesPopulares] = useState()
    const { setCarregandoPagina } = useLoading()


    useEffect(() => {
        Promise.all([
            EmCartaz(),
            UpComingMovies(),
            TopMovies(),
            MoviesPopular()
        ]).then(([EmCartaz, UpComingMovies, TopMovies, MoviesPopular ]) => {

            setEmCartaz(EmCartaz)
            setUpComingMovies(UpComingMovies)
            setTopMovies(TopMovies)
            setMoviesPopulares(MoviesPopular)
        }).catch((error) => console.error(error))
    },[])

      const carregando = !emCartaz || !upComingMovies || !topMovies || !moviesPopulares

    useEffect(() => {
        setCarregandoPagina(carregando)
    }, [carregando])

    if (carregando) {
        return null
    }

    return (
        <Container 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
        >
            {emCartaz && <Carousel info={emCartaz}        title={'Lançamentos'} link={'/cartaz'}/>}
            {upComingMovies && <Carousel info={upComingMovies}  title={'Em breve'} link={'/lancamentos-movies'}/>}
            {topMovies && <Carousel info={topMovies}       title={'Os mais bem avaliados'} link={'/bem-avaliados'}/>}
            {moviesPopulares && <Carousel info={moviesPopulares} title={'Populares'} link={'/populares-movies'}/>}
        </Container>
    )
}
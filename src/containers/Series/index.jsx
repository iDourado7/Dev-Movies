import { useState } from "react";
import { Container } from "./styles";
import { useEffect } from "react";
import { SeriesAir, SeriesPopular, TopSeries, UpTodaySeries } from "../../services/DataApi";
import Carousel from "../../components/Carousel";
import { useLoading } from "../../components/ContextLoading"


export default function Series() {

       const [todaySeries, setTodaySeries] = useState()
       const [seriesAir, setSeriesAir] = useState()
       const [topSeries, setTopSeries] = useState()
       const [seriesPopular, setSeriesPopular] = useState()
       const { setCarregandoPagina } = useLoading()
       
   
       useEffect(() => {
           Promise.all([
              UpTodaySeries(),
              SeriesAir(),
              TopSeries(),
              SeriesPopular()
           ]).then(([UpTodaySeries, SeriesAir, TopSeries, SeriesPopular]) => {
              setTodaySeries(UpTodaySeries)
              setSeriesAir(SeriesAir)
              setTopSeries(TopSeries)
              setSeriesPopular(SeriesPopular)
           }).catch((error) => console.error(error))
       },[])

    const carregando = !todaySeries || !seriesAir || !topSeries || !seriesPopular

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
                {todaySeries && <Carousel info={todaySeries}   title={'Séries em Exibição de hoje'} link={'/exibicao-series'} tipo="tv"/> }
                {seriesAir && <Carousel info={seriesAir}     title={'Séries lançamentos'} link={'/lancamentos-series'} tipo="tv"/>}
                {topSeries && <Carousel info={topSeries}     title={'As mais bem avaliadas'} link={'/bem-avaliadas'} tipo="tv"/>}
                {seriesPopular && <Carousel info={seriesPopular} title={'Populares'} link={'/populares-series'} tipo="tv"/>}
           </Container>
       )
}
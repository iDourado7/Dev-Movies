import { Routes, Route } from "react-router-dom";

import Home from "../containers/Home";
import DefaultHeader from "../layout/HeaderDefault";
import Details from "../containers/Detail";
import Movies from "../containers/Filmes";
import Series from "../containers/Series";

import CartazMovies from "../subFilmes/Cartaz";
import LancamentoMovies from "../subFilmes/Lancamentos";
import BemAvaliadosMovies from "../subFilmes/BemAvaliados";
import PopularesMovies from '../subFilmes/populares'

import ExibicaoSeries from '../subSeries/Exibição'
import BemAvaliadosSeries from "../subSeries/BemAvaliadas";
import LancamentoSeries from '../subSeries/Lancamentos'
import PopularesSeries from "../subSeries/populares";


export default function Router() {
    return (
        <Routes>
            <Route element={ <DefaultHeader/> }>
                <Route path="/"             element={ <Home/> }/>
                <Route path="/filmes"       element={ <Movies/> }/>
                <Route path="/series"       element={ <Series/> }/>
                <Route path="/detalhes/:tipo/:id" element={ <Details/> }/>
            </Route>
              <Route path="/cartaz"             element={ <CartazMovies/> }/>
              <Route path="/lancamentos-movies" element={ <LancamentoMovies/> }/>
              <Route path="/bem-avaliados"      element={ <BemAvaliadosMovies/> }/>
              <Route path="/populares-movies"   element={ <PopularesMovies/> }/>
             
              <Route path="/exibicao-series"      element={ <ExibicaoSeries/> }/>
              <Route path="/lancamentos-series"   element={ <LancamentoSeries/> }/>
              <Route path="/bem-avaliadas"        element={ <BemAvaliadosSeries/> }/>
              <Route path="/populares-series"     element={ <PopularesSeries/> }/>
             
        </Routes>
    )
}
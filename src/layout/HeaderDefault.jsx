import Footer from "../components/Footer"
import Header from "../components/Header"
import { Outlet } from "react-router-dom"
import { useLoading } from "../components/ContextLoading"
import { Wrapper } from "./styles" 
import { LoadingOverlay, Spinner, LoadingText } from "../components/ContextLoading/styles"

export default function DefaultHeader () {

    const { carregandoPagina } = useLoading()

    return (

        <>
            <Wrapper>
                  <Header/>

                  {carregandoPagina && (
                    <LoadingOverlay>
                        <Spinner/>
                        <LoadingText>Carregando...</LoadingText>
                    </LoadingOverlay>
                )}

            <main>
                <Outlet/>
            </main>
               {!carregandoPagina && <Footer/>}
        </Wrapper>
        </>
    )
}
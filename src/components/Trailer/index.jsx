import { useState } from "react"
import { Background, Button, Container } from "./styles"
import { useEffect } from "react"
import api from "../../services/ApiTmdb"

export default function Trailer ({posterId, setShowTrailer}){

    const [trailer, setTrailer] = useState()

   useEffect(() => {

    async function getTrailer(){
        const {data : {results}} = await api.get(`/movie/${posterId}/videos`)

        const trailerOficial = results.find(video => video.type === 'Trailer' && video.site === 'YouTube')
        
        setTrailer(trailerOficial || results[0])
   }
   getTrailer()

  },[])

    return (
        <Background onClick={() => setShowTrailer(false)}>
            {trailer && (
            <Container>
                
                <iframe 
                src={`https://www.youtube.com/embed/${trailer.key}`}
                height='400px'
                width='100%'
                title="Youtube Player Video"
                />
                <Button onClick={() => setShowTrailer(false)}>X</Button>
            </Container>
            )}
        </Background>
    )
}
import UrlImage from "../../utils/urlApi"
import { CardsLinks } from "./styles"

export default function CardLink({ item, tipo = 'movie' }) {
    return (
                  
            <CardsLinks to={`/detalhes/${tipo}/${item.id}`}>
                <img src={UrlImage(item.poster_path)}/>
                <h3>{item.title || item.name}</h3>
            </CardsLinks>
    )
}
                   
                   
                   
                  
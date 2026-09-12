import {Container } from "./styles";
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import {Link ,useLocation } from "react-router-dom";
import CardLink from "../CardLinks";


export default function Carousel ({info, title, link, tipo = 'movie'}){

    const location = useLocation()
    const filmesOrSeries = location.pathname === '/filmes' ||  location.pathname === '/series'
    const textLink = filmesOrSeries ? 'Ver mais  →' : ''
    
    return (
        <Container>

            <div className="header-section">
                <h2>{title}</h2>

                {filmesOrSeries && (
                <Link to={link} >{textLink}</Link>
               )}
            </div>
             
        <Swiper
        slidesPerView={2}
        slidesPerGroup={2}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
                    450: { slidesPerView: 3, slidesPerGroup: 2 },
                    768: { slidesPerView: 4, slidesPerGroup: 3 },
                    1024: { slidesPerView: 5, slidesPerGroup: 4 },
                    1280: { slidesPerView: 6, slidesPerGroup: 5 }
                }}
        >
           
            {info.map((item, index) => (
                
                <SwiperSlide key={index}>

                    <CardLink key={index} item={item} tipo={tipo}/>

                </SwiperSlide>
            ))}
        </Swiper>
        </Container>
    )
}
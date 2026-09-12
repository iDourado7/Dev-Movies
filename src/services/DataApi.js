import api from "./ApiTmdb";

//========================= LANÇAMENTOS================================
 export async function Poster(){
        const {data : {results}} = await api.get('/movie/now_playing')
        const randomIndex = Math.floor(Math.random() * results.length)
        const newData = results[randomIndex]
        return newData
   }

 export async function EmCartaz(){
        const {data : {results}} = await api.get('/movie/now_playing')
        return results
   }
   
//======================================================================

//======================= MAIS BEM AVALIADOS============================
  export async function TopMovies(){
        const {data : {results}} = await api.get('/movie/top_rated')
         return results
   }
   

   export async function TopSeries(){
        const {data : {results}} = await api.get('/tv/top_rated')
         return results
   }
   
//=======================================================================

//=======================POPULARES=======================================
   export async function MoviesPopular(){
        const {data : {results}} = await api.get('/movie/popular')
         return results
   }
   

   export async function SeriesPopular(){
        const {data : {results}} = await api.get('/tv/popular')
        return results
   }
//========================================================================

//============================= EM BREVE =================================
   export async function UpComingMovies(){
        const {data : {results}} = await api.get('/movie/upcoming')
        return results
   }
   export async function UpTodaySeries(){
        const {data : {results}} = await api.get('tv/airing_today')
        return results
   }

//===============================NO AR HOJE ===============================
   export async function SeriesAir(){
        const {data : {results}} = await api.get('/tv/on_the_air')
        return results
   }

   //==============================Detalhes dos filmes============================================

    export async function DetailMovie(id){
        const {data} = await api.get(`/movie/${id}`)
        return data
   }

    export async function CreditsMovie(id){
        const {data : {cast}} = await api.get(`/movie/${id}/credits`)
        return cast
   }

    export async function VideosMovie(id){
         const {data : {results}} = await api.get(`/movie/${id}/videos`)
         return results
   }
   

    export async function SimilarMovie(id){
        const {data : {results}} = await api.get(`/movie/${id}/similar`)
        return results
   }
   

   //==============================Detalhes das Séries============================================

    export async function DetailSeries(id){
        const {data} = await api.get(`/tv/${id}`)
        return data
   }

    export async function CreditsSeries(id){
        const {data : {cast}} = await api.get(`/tv/${id}/credits`)
        return cast
   }

    export async function VideosSeries(id){
         const {data : {results}} = await api.get(`/tv/${id}/videos`)
         return results
   }
   

    export async function SimilarSeries(id){
        const {data : {results}} = await api.get(`/tv/${id}/similar`)
        return results
   }
   
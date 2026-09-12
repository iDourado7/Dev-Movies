export default function UrlImage(path){
    return path ? `https://image.tmdb.org/t/p/original${path}` : 'sem imagens'
}
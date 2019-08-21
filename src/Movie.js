import React from 'react';
import './Movie.css';
import PropTypes from 'prop-types'
/*
class Movie extends Component{


    static propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired
    }

    render(){
        return(
            <div>
                <MoviePoster poster={this.props.poster}/>
                <h1>{this.props.title}</h1>
             </div>
        )
    }
}
*/

//class MoviePoster extends Component{
//
//    static propTypes = {
//        poster: PropTypes.string.isRequired
//    }
//    render(){
//        return(
//            <img src={this.props.poster} alt="Movie Poster" />
//        )
//    }
//}


function Movie({title, poster, genres, synopsis}){
    return(
        <div className="Movie">
            <div className = "Movie__Column">
            <MoviePoster poster={poster} alt={title}/>
            </div>
           
            <div className="Movie__Column">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index}/>)}
                </div>
                <p className="Movie__Synopsis">
                    {synopsis}
                </p>
            </div>
         </div>        
    )
}
//state가 필요없는 stateless function은 class가인고 fucntion으로 시작 function render도 없고, 라이프 사이클도 없다!!
//오직 가지고 있는것은 return 뿐 !!!!
//class가 아니기 때문에 this.props는 필요가 없다.
function MoviePoster({poster, alt}){
    return(
        <img src={poster}  alt={alt} title={alt} className="Movie__Poster"/>
    )
}

function MovieGenre({genre}){
    return(
        <span className="Movie__Genre">{genre}</span>
    )
}
Movie.propTypes= {
    title : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired

}

MoviePoster.propTypes ={
    poster: PropTypes.string.isRequired,
    alt : PropTypes.string.isRequired
}

MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired
}
export default Movie;
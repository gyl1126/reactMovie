import React, {Component} from 'react';
import './App.css';
import Movie from './Movie';
// Render : componentWillMount() => render() => componentDidMount()
// Update componentWillReceiveProps() => shouldComponentUpdate()  => componentWillUpdate() => render() => componentDidUpdate()

class App extends Component {

  state={

  }

componentDidMount(){
  this._getMoives();
}


 _getMoives = async() => {
  const movies = await this._callApi() 
  this.setState({
    movies
  })
}

_callApi = () => {
  return fetch('https://yts.lt/api/v2/list_movies.json?sort_by=rating')
  .then(response => response.json())
  .then(json => json.data.movies)
  .catch(err => console.log(err))
}
_renderMovies = () =>{
  const movies =  this.state.movies.map(movie =>{
      return (<Movie title={movie.title_english}
                     poster={movie.medium_cover_image}
                     key={movie.id} 
                     genres ={movie.genres}
                     synopsis={movie.synopsis}
                     />
                      )     
    })
    console.log(movies)
    return movies
}
  render(){
    const { movies } = this.state;
  return (
    <div className={movies ? "App" : "App--loading"}>     
      {movies ? this._renderMovies() : 'Loading'}
    </div>
  );
 }
}

export default App;

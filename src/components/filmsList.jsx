import { Component } from "react";

class FilmsList extends Component {
  constructor(props){
    super(props);

    this.state={
      list:[],
    };
  }

  componentDidMount(){
    this.getFilms();
  }

  getFilms(){
    fetch("https://studioghibliapi-d6fc8.web.app/films")
      .then((response)=>{
        return response.json();
      })
      .then((films) => this.setState({ list: films }))
      .catch((error)=>{
        console.error(error)
      })
  }

  render() {
    return(
      <ul>
        {this.state.list.map((film) => {
            return <li key={film.id}>{film.title}</li>;
          })}
      </ul>
    ) 
    
  }
}










export default FilmsList;
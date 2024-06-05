import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import "./Home.css"

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovies = async() => {
    const json = await ( await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year`)).json();
    // const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year`);
    // const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  }

    useEffect(()=>{
    getMovies();
    }, []);

    // useEffect(()=>{
    //   fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year`)
    //   .then((response) => response.json())
    //   .then((json) => {
    //     setMovies(json.data.movies);
    //     setLoading(false);
    //   })
    // }, [])

    return (
        <div className="home-bg">
        {loading ? 
            <h1>
            <strong>Loading...</strong>
            </h1> 
            : 
            <div className="home-cd"> 
            {movies.map((row) => (
                <Movie 
                    key={row.id}
                    id={row.id}
                    mediumCoverImage={row.medium_cover_image} 
                    title={row.title} 
                    summary={row.summary} 
                    genres={row.genres}/>
            ))} 
            </div>}
        </div>
    );
}

export default Home;
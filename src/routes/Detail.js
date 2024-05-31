import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Detail() {
    const { id } = useParams();
    const [ loading, setLoading ] = useState(true);
    const [ movieInfo, setMovieInfo ] = useState([]);
    
    useEffect(()=>{
        const getMovieInfo = async () =>{
            const json = await ( await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
            setMovieInfo(json.data.movie)
            setLoading(false)
        }

        getMovieInfo();
    }, [id])

    return (
        <div>
            <h1>Detail</h1>
            {loading ? 
                <h1>
                <strong>Loading...</strong>
                </h1> 
            :  
            <div>
                <img src={movieInfo.large_cover_image} alt={movieInfo.title}/>
                <h2>{movieInfo.title_long}</h2>
                <p>{movieInfo.description_full}</p>
                <ul>
                {movieInfo.genres.map((cate) => (<li key={cate}>{cate}</li>))}
                </ul>
            </div>
            }
            <Link to={`/`}>
                <button>Back</button>
            </Link>
        </div>
    );
}
export default Detail;
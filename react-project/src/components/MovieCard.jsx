import React from 'react';
import { Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MovieCard = ({ list, type }) => {
  let url = 'https://www.themoviedb.org/t/p/w355_and_h200_multi_faces' + list.poster_path

  return (
    <div style={{ backgroundImage: "url(" + `${url}` + ")" }} className='card-item'>
      {/* <img src={url} className="carousel-img"></img> */}


      <Link to={`/movies/${list.id}?type=${type}`}>
        <div className='overlay'>
          <h3>{list.title}</h3>
          <div>
            <span>평점 {list.vote_average}</span>
            {"   "}
            <span>
              {/* react-bootstrap Badge  */}
              {list.adult
                ? <Badge bg="danger">청소년 관람 불가</Badge>
                : <Badge bg="success">전체관람가</Badge>
              }
            </span>
          </div>
        </div>
      </Link>

    </div>
  )
}

export default MovieCard;
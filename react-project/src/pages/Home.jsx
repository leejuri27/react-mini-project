import React, { useState, useEffect } from 'react';
import axios from '../axios';
import { useDispatch, useSelector } from 'react-redux';
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpComingMovies
} from '../redux/movieSlice';
import Banner from '../components/Banner';
import { PulseLoader } from 'react-spinners'
import MovieSlide from '../components/MovieSlide';
// import MovieCard from '../components/MovieCard';


const Home = () => {
  // 기존에 있던 session Movie 지워버리자
  sessionStorage.removeItem('movie');

  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upComingMovies } = useSelector(state => state.movies);
  const [loading, setLoading] = useState(true);

  // 화면이 렌더링되자마자 api를 가져올것
  useEffect(() => {
    const popularApi = axios.get('/popular?language=ko-KR&page=1');
    const topRatedApi = axios.get('/top_rated?language=ko-KR&page=1');
    const upComingApi = axios.get('/upcoming?language=ko-KR&page=1');

    Promise  // Promise.all : 여러번의 API요청을 병렬로 처리(순서X 한꺼번에 처리)
      .all([popularApi, topRatedApi, upComingApi])
      .then(res => {
        console.log(res)

        // API에서 받아온 데이터를 store안에 넣고싶음 => useDispatch 사용
        dispatch(getPopularMovies(res[0].data));
        dispatch(getTopRatedMovies(res[1].data));
        dispatch(getUpComingMovies(res[2].data));

      })
      .then(() => {
        setLoading(false)
      })
      ;

  }, [])

  // store에 값이 잘 들어갔는지 확인해보는 용도
  // useEffect(() => {
  //   console.log('store 상태', popularMovies, topRatedMovies, upComingMovies)
  // }, [popularMovies, topRatedMovies, upComingMovies])


  if (loading) {
    return (
      <PulseLoader
        color="#ffffff"
        loading={loading}
        margin={5}
        size={10}>
      </PulseLoader>
    )
  }

  return (
    <div>
      {/*
       LifeCycle 생명주기 - 컴포넌트
       - popularMovies 라는 애가 존재하면? => result
       - 존재하지 않으면 배너 띄울 필요 x
       */}
      {/* 로딩스피너를 만들면 데이터가 안왔을때 로딩만 리턴이 되기때문에 별도로 조건부 처리 할 필요 X */}
      {
        popularMovies.results && <Banner movie={popularMovies.results} />
      }

      <br />
      <h3>Popular Movies</h3>
      <MovieSlide list={popularMovies.results} type="popularMovies" />
      <br />
      <h3>TopRated Movies</h3>
      <MovieSlide list={topRatedMovies.results} type="topRatedMovies" />
      <br />
      <h3>UpComing Movies</h3>
      <MovieSlide list={upComingMovies.results} type="upComingMovies" />

    </div>
  )
}

export default Home
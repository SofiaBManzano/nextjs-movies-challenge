"use client";
import { useEffect, useState } from "react";
import Button from "./components/Button";
import ContainerImg from "./components/ContainerImg"
import PosterImg from "./components/PosterImg"
interface Movie {
  title: string;
  description: string;
  genre: string;
  highlighted: boolean;
  id: string;
  poster: string;
  rating: number;
  thumbnail: string;
}

const fetchListMovies = async (token: string | null) => {
  var myHeaders = new Headers();

  myHeaders.append("Accept", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  return fetch(
    "https://kata.conducerevel.com/films/movies",
    requestOptions
  ).then((response) => response.json());
};
const fetchGenres = async (token: string | null) => {
  var myHeaders = new Headers();

  myHeaders.append("Accept", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  return fetch(
    `https://kata.conducerevel.com/films/genres`,
    requestOptions
  ).then((response) => response.json());
};

export default function ListMovies() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const token: string | null = localStorage.getItem("token");

  useEffect(() => {
    fetchListMovies(token).then((items) => {
      setMovies(items);
    });
    fetchGenres(token).then((items) => {
      setGenres(items);
    });
  }, []);
  const myGenres = [...new Set(movies.map((movie) => movie.genre))];

  const handleComedyFilter = () => {
    const filterMovies = movies.filter(
      (movie: Movie) => movie.genre === "22f9f9a3-c84c-4d28-81f5-218d87cc41f5"
    );
    setMovies(filterMovies);
  };
  return (
    <>
      <Button onClick={handleComedyFilter}>Comedy</Button>
      {myGenres.map((idGenre) => {
        // get genre name
        const genre = genres.filter(
          (item: { id: string; genre: string }) => item.id === idGenre
        )[0].name;
        // get movies by genre
        const filterMovies = movies.filter(
          (movie: Movie) => movie.genre === idGenre
        );
        return (
       <>
            <h2>{genre}</h2>
              <aside class="u-flex c-movies-list">
            {filterMovies.map((movie) => (
            <ContainerImg><PosterImg src={movie.thumbnail}></PosterImg></ContainerImg>
              
            ))}
          </aside></>
        );
      })}
    </>
  );
}

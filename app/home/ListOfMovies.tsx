"use client";
import { useEffect, useState } from "react";
import ContainerImg from "app/components/ContainerImg";
import PosterImg from "app/components/PosterImg";
import MovieType from "../components/types";

const fetchMoviesByGenre = async (token: string | null, id: string) => {
  var myHeaders = new Headers();

  myHeaders.append("Accept", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  return fetch(
    `https://kata.conducerevel.com/films/genres/${id}/movies`,
    requestOptions
  ).then((response) => response.json());
};

export function ListOfMovies(props: any) {
  const [movies, setMovies] = useState([]);
  const token: string | null = localStorage.getItem("token");
  useEffect(() => {
    fetchMoviesByGenre(token, props.genreObject.id).then((items) => {
      setMovies(items);
    });
  }, [props.genreObject]);
  return (
    <>
      <h2>{props.genreObject.name}</h2>
      <aside className="u-flex c-movies-list">
        {movies.map((movie: MovieType) => (
          <ContainerImg>
            <PosterImg src={movie.thumbnail}></PosterImg>
          </ContainerImg>
        ))}
      </aside>
    </>
  );
}

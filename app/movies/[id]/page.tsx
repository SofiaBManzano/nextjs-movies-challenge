"use client";
import { useEffect, useState } from "react";
import MovieType from "app/components/types";
const fetchMovieById = async (token: string | null, id: string) => {
  var myHeaders = new Headers();

  myHeaders.append("Accept", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  return fetch(
    `https://kata.conducerevel.com/films/movies/${id}`,
    requestOptions
  ).then((response) => response.json());
};

export default function Movie({ params }: any, props: any) {
  const { id } = params;
  const [movie, setMovie] = useState<MovieType>({});
  useEffect(() => {
    const token: string | null = localStorage.getItem("token");
    fetchMovieById(token, id).then((movie) => setMovie(movie));
  }, []);
  return (
    <>
      <h1>esto es una peli {movie.title}</h1>
      <img src={movie.poster}></img>
    </>
  );
}

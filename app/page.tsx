"use client";
import { useEffect, useState } from "react";
import Button from "./components/Button";
import ContainerImg from "./components/ContainerImg";
import PosterImg from "./components/PosterImg";
import GenreType from "./components/types";
//components
import { ButtonFilter } from "./home/ButtonFilter";
import { ListOfMovies } from "./home/ListOfMovies";
// interface Movie {
//   title: string;
//   description: string;
//   genre: string;
//   highlighted: boolean;
//   id: string;
//   poster: string;
//   rating: number;
//   thumbnail: string;
// }

// const fetchListMovies = async (token: string | null) => {
//   var myHeaders = new Headers();

//   myHeaders.append("Accept", "application/json");
//   myHeaders.append("Authorization", `Bearer ${token}`);

//   var requestOptions = {
//     method: "GET",
//     headers: myHeaders,
//   };

//   return fetch(
//     "https://kata.conducerevel.com/films/movies",
//     requestOptions
//   ).then((response) => response.json());
// };
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
  const [genres, setGenres] = useState([]);
  const token: string | null = localStorage.getItem("token");
  const handleSetGenres = (item: GenreType) => {
    setGenres(item);
  };
  useEffect(() => {
    fetchGenres(token).then((items) => {
      setGenres(
        items.sort((a: GenreType, b: GenreType) =>
          a.name > b.name ? 1 : b.name > a.name ? -1 : 0
        )
      );
    })
  }, []);
  return (
    <>
      {genres.map((genreItem: GenreType) => (
        <ButtonFilter handleSetGenres={handleSetGenres} genre={genreItem} />
      ))}
      {genres.map((genreItem: GenreType) => (
        <ListOfMovies genreObject={genreItem} />
      ))}
    </>
  );
}

"use client";
import { useEffect, useState } from "react";
import { ButtonFilter } from "./ButtonFilter";
import { ListOfMovies } from "./ListOfMovies";
import GenreType from "../components/types";
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

export default function MenuMovies() {
  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);
  const [genreFilter, setGenreFilter] = useState([]);
  const token: string | null = localStorage.getItem("token");
  const handleSetGenreFilter = (filter: string) => {
    setGenreFilter(filter);
  };
  useEffect(() => {
    fetchGenres(token).then((items) => {
      const orderedItems = items.sort((a: GenreType, b: GenreType) =>
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0
      );
      setGenres(orderedItems);
    });
  }, []);

  useEffect(() => {
    fetchListMovies(token).then((items) => {
      setMovies(items);
    });
  }, []);
  const filteredMovies =
    genreFilter.length === 0
      ? movies
      : movies.filter((movie) => genreFilter.includes(movie.genre));
  return (
    <>
      {genres.map((genre: GenreType) => (
        <ButtonFilter
          genreFilter={genreFilter}
          handleSetGenreFilter={handleSetGenreFilter}
          genre={genre}
        />
      ))}
      <ListOfMovies movies={filteredMovies} genres={genres} />
    </>
  );
}

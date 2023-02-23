"use client";
import { useEffect, useState } from "react";
import { ButtonFilter } from "./ButtonFilter";
import { RenderGenderMovies } from "./RenderGenderMovies";
import GenreType from "../components/types";
import MovieType from "../components/types";
import MainSection from "app/components/home/main";
import Containers from "app/components/Containers";
import { colors } from "app/components/config/theme";
const { ContentainerButtonFilter } = Containers;

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

export default function MenuMovies(props: any) {
  const [genres, setGenres] = useState<GenreType[]>([]);
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [genreFilter, setGenreFilter] = useState<string[]>([]);
  const token: string | null = localStorage.getItem("token");
  const handleSetGenreFilter = (filter: []) => {
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

  const genreButtons = genres.map((genre: GenreType) => (
    <ButtonFilter
      bgColor={colors.primaryBtn}
      genreFilter={genreFilter}
      handleSetGenreFilter={handleSetGenreFilter}
      genre={genre}
    />
  ));
  return (
    <MainSection>
      <ContentainerButtonFilter>{genreButtons}</ContentainerButtonFilter>
      <RenderGenderMovies movies={filteredMovies} genres={genres} />
    </MainSection>
  );
}

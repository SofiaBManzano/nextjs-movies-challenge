"use client";

import ContainerImg from "app/components/home/ContainerImg";
import PosterImg from "app/components/home/PosterImg";
import MovieType from "../components/types";
import GenreType from "../components/types";
import Link from "next/link";
import List from "app/components/home/List";
const {ListItem, ListContent, ListTitle} = List;

export function RenderGenderMovies(props: any) {

  return (
    <>
      {props.genres.map((genre: GenreType) => {
        const filteredMovies = props.movies.filter(
          (movie: MovieType) => movie.genre === genre.id
        );
        const renderMovies= filteredMovies.map((movie: MovieType) => (
          <ListItem key={movie.id}>
            <Link href="movies/[id]" as={`/movies/${movie.id}`}>
              <ContainerImg>
                <PosterImg src={movie.thumbnail}></PosterImg>
              </ContainerImg>
            </Link>
          </ListItem>
        ))
        return filteredMovies.length > 0 ? (
          <>
            <ListTitle>{genre.name}</ListTitle>

            <ListContent key={genre.id}>
              {renderMovies}
            </ListContent>
          </>
        ) : (
          <></>
        );
      })}
    </>
  );
}

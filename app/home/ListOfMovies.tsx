"use client";
import { useEffect, useState } from "react";
import ContainerImg from "app/components/ContainerImg";
import PosterImg from "app/components/PosterImg";
import MovieType from "../components/types";
import GenreType from "../components/types";

export function ListOfMovies(props: any) {
  return (
    <>
      {props.genres.map((genre: GenreType) => {
        const filteredMovies = props.movies
        .filter((movie: MovieType) => movie.genre === genre.id)
      
        return filteredMovies.length > 0 ? (
          <>
            <h2>{genre.name}</h2>
            <aside className="u-flex c-movies-list">
              {filteredMovies
                .map((movie: MovieType) => (
                  <ContainerImg>
                    <PosterImg src={movie.thumbnail}></PosterImg>
                  </ContainerImg>
                ))}
            </aside>
          </>
        ) : <></>
      })}
    </>
  );
}

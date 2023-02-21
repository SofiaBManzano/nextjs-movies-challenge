"use client";

import ContainerImg from "app/components/home/ContainerImg";
import PosterImg from "app/components/home/PosterImg";
import MovieType from "../components/types";
import GenreType from "../components/types";
import Link from "next/link";
import List from "app/components/home/List";
const {ListItem, ListContent} = List;

export function ListOfMovies(props: any) {
  return (
    <>
      {props.genres.map((genre: GenreType) => {
        const filteredMovies = props.movies.filter(
          (movie: MovieType) => movie.genre === genre.id
        );

        return filteredMovies.length > 0 ? (
          <>
            <h2>{genre.name}</h2>

            <ListContent>
              {filteredMovies.map((movie: MovieType) => (
                <ListItem draggable="true" >
                  <Link href="movies/[id]" as={`/movies/${movie.id}`}>
                    <ContainerImg>
                      <PosterImg src={movie.thumbnail}></PosterImg>
                    </ContainerImg>
                  </Link>
                </ListItem>
              ))}
            </ListContent>
          </>
        ) : (
          <></>
        );
      })}
    </>
  );
}

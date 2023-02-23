"use client";
import { useEffect, useState } from "react";
import MovieType from "app/components/types";
import HighlightInfoAll from "../../components/home/HighlightInfoAll";
const {HighlightedTitle} = HighlightInfoAll;
import Detail from "./detailStyles";
import Button from "app/components/Button";
const { ImageContainer, BtnsContainer, DetailInfo, DetailLayoutInfo } = Detail;


// const { HighlightedTitle } = HighlightInfoAll;
import UnderConstruction from "./underConstruction";
import PosterImg from "app/components/home/PosterImg";
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
  console.log(movie);
  useEffect(() => {
    const token: string | null = localStorage.getItem("token");
    fetchMovieById(token, id).then((movie) => setMovie(movie));
  }, []);
  return (
    <>

      <ImageContainer>
        <picture>
          <source media="(max-width: 768px)" srcSet={movie.thumbnail} />
          <source media="(min-width: 768px)" srcSet={movie.poster} />
          <PosterImg src={movie.thumbnail} />
        </picture>
        <BtnsContainer>
          {" "}
          <Button primary={false}>Trailer</Button>
          <Button primary={true}>Play</Button>
        </BtnsContainer>
      </ImageContainer>
      <DetailLayoutInfo> <DetailInfo>
        Rating: <span>{movie.rating}</span>
      </DetailInfo>
      <DetailInfo>
        Cast <span>{movie.cast}</span>
      </DetailInfo>

      <HighlightedTitle>{movie.title}</HighlightedTitle>
      <p>{movie.description}</p>
      </DetailLayoutInfo>
     
      <UnderConstruction/>
    </>
  );
}

"use client";
import { useEffect, useState } from "react";
import MovieType from "../components/types";
import Button from "../components/Button";
import "../../styles/styles.css";
import PosterImg from "../components/home/PosterImg";
import Highlight from "app/components/home/Highlight";
import HighlightInfoAll from "app/components/home/HighlightInfoAll";
import LogOut from "../movies/LogOut";

const {
  HighlightContentInfo,
  HighlightInfo,
  HighlightedText,
  HighlightedTitle,
  HighlightContainerInfo,
  HighlightContainerInfoBtn,HighlightContainerDiscover
} = HighlightInfoAll;

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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

export default function HeroHighlighted() {
  const [movies, setMovies] = useState([]);
  const token: string | null = localStorage.getItem("token");

  useEffect(() => {
    fetchListMovies(token).then((items) => {
      setMovies(items);
    });
  }, []);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1440 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1440, min: 768 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const slider = movies
    .filter((movie: MovieType) => movie.highlighted === true)
    .map((movie: MovieType) => {
      return (
        <Highlight key={movie.id}>
          <HighlightContentInfo>
            <HighlightInfo>
              <HighlightContainerInfoBtn>
              <LogOut></LogOut>
              </HighlightContainerInfoBtn>

              <HighlightContainerInfo>
                <HighlightedTitle>{movie.title}</HighlightedTitle>
                <HighlightedText>{movie.description}</HighlightedText>
                <HighlightContainerDiscover><Button  primary={true}>Discover</Button></HighlightContainerDiscover>
                
              </HighlightContainerInfo>
            </HighlightInfo>
          </HighlightContentInfo>
          <picture>
            <source media="(max-width: 768px)" srcSet={movie.thumbnail} />
            <source media="(min-width: 768px)" srcSet={movie.poster} />
            <PosterImg src={movie.thumbnail} />
          </picture>
        </Highlight>
      );
    });

  return (
    <>
      {" "}
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={6000}
        keyBoardControl={true}
        customTransition="all .4"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={[
          "superLargeDesktop",
          "desktop",
          "tablet",
          "mobile",
        ]}
        dotListClass="{border-color: blue 1px solid;}"
        itemClass="carousel-item-padding-40-px"
      >
        {slider}
      </Carousel>
    </>
  );
}

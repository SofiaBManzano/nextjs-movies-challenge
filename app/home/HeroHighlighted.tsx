"use client";
import { useEffect, useState } from "react";
import MovieType from "../components/types";
import Button from "../components/Button";
import ContainerPoster from "../components/ContainerPoster";
import PosterImg from "../components/PosterImg";

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
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
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
        <div>
          <div>
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
            <Button>Discover</Button>
          </div>
          <div>
            <PosterImg src={movie.poster}></PosterImg>
          </div>
        </div>
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
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={6000}
        keyBoardControl={true}
        customTransition="all .4"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        //   deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {slider}
      </Carousel>
    </>
  );
}
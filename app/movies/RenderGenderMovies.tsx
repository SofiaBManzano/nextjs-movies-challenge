"use client";

import ScrollContainer from 'react-indiana-drag-scroll'
import 'react-indiana-drag-scroll/dist/style.css'
import "../../styles/carouselList.css"
import Carousel from "react-multi-carousel";

import ContainerImg from "app/components/home/ContainerImg";
import PosterImg from "app/components/home/PosterImg";
import MovieType from "../components/types";
import GenreType from "../components/types";
import Link from "next/link";
import List from "app/components/home/List";
const { ListItem, ListContent, ListTitle } = List;


export function RenderGenderMovies(props: any): JSX.Element {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1440 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 1440, min: 768 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  {
    return (
      <>
        {props.genres.map((genre: GenreType) => {
          const filteredMovies = props.movies.filter(
            (movie: MovieType) => movie.genre === genre.id
          );
          const renderMovies = filteredMovies.map((movie: MovieType) => (
            
              <Link href="movies/[id]" as={`/movies/${movie.id}`}>
                <ContainerImg>
                  <PosterImg src={movie.thumbnail}></PosterImg>
                </ContainerImg>
               </Link>
           
          ));
          return filteredMovies.length > 0 ? (
            <>
              <ListTitle>{genre.name}</ListTitle>

               <Carousel
               responsive={responsive}
               draggable={true}
               ssr={true}
               showDots={false}
               autoPlay={false}
               keyBoardControl={true}
               removeArrowOnDeviceType={[
                "tablet",
                "mobile",
              ]}
               >
                {renderMovies} 
                </Carousel>
            </>
          ) : (
            <></>
          );
        })}
      </>
    );
  }
}

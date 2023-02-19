"use client";
import Button from "../components/Button";
export function ButtonFilter(props: any) {
  const handleButtonFilter = () => {
    props.handleSetMovies(
      props.movies.filter((movie) => movie.genre === props.genre.id)
    );
  };
  return <Button onClick={handleButtonFilter}>{props.genre.name}</Button>;
}

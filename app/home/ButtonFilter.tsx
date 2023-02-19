"use client";
import Button from "../components/Button";
export function ButtonFilter(props: any) {
  
  const handleComedyFilter = () => {
    if (!props.isFiltered) {
      props.handleSetGenres([props.genre]);
    } else {
      props.handleSetGenres(props.allGenres)
    }
    props.toggleFiltered()
  };
  return <Button onClick={handleComedyFilter}>{props.genre.name}</Button>;
}

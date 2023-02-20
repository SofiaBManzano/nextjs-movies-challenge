"use client";
import { useEffect, useState } from "react";
import Button from "../components/Button";
export function ButtonFilter(props: any) {
  const handleButtonFilter = () => {
    if (props.genreFilter.includes(props.genre.id)) {
      props.handleSetGenreFilter(
        props.genreFilter.filter((element) => element != props.genre.id)
      );
    } else {
      props.handleSetGenreFilter(props.genreFilter.concat(props.genre.id));
    }
  };
  return <Button onClick={handleButtonFilter}>{props.genre.name}</Button>;
}

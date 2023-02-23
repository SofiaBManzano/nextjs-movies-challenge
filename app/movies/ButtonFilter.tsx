"use client";

import { useState } from "react";
import Button from "../components/Button";
import { ButtonFilters } from "app/components/types";

export function ButtonFilter(props: any) {
  const [isActive, setIsActive] = useState(false);

  const handleButtonFilter = () => {
    isActive ? setIsActive(false) : setIsActive(true);
    if (props.genreFilter.includes(props.genre.id)) {
      props.handleSetGenreFilter(
        props.genreFilter.filter((element: any) => element != props.genre.id)
      );
    } else {
      props.handleSetGenreFilter(props.genreFilter.concat(props.genre.id));
    }
  };
  return (
    <Button<ButtonFilters>
      key={props.genre.id}
      isActive={isActive}
      primary={false}
      onClick={handleButtonFilter}
    >
      {props.genre.name}
    </Button>
  );
}

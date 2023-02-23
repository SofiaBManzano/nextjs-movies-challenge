//components
"use client";
import HeroHighlighted from "./movies/HeroHighlighted";
import MenuMovies from "./movies/MenuMovies";
import { useRouter } from "next/navigation";

export default function ListMovies() {
  const router = useRouter();
  if (!localStorage.getItem("token")) {
    router.push("/login");
  } else {
    return (
      <>
        <HeroHighlighted />
        <MenuMovies />
      </>
    );
  }
}

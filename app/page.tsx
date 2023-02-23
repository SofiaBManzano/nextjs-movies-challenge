//components
"use client";
import HeroHighlighted from "./movies/HeroHighlighted";
import MenuMovies from "./movies/MenuMovies";
import { useRouter } from "next/navigation";

export default function ListMovies() {
  // const token =
  //   typeof window !== "undefined"
  //     ? window.localStorage.getItem("token")
  //     : false;
  const token = localStorage.getItem("token");
  const router = useRouter();
  if (!token) {
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

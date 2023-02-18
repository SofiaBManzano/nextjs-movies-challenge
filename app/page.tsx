
'use client'
import { useEffect , useState } from "react";
const fetchListMovies = async (token:string) => {
  var myHeaders = new Headers();
  
  
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  return fetch("https://kata.conducerevel.com/films/movies", requestOptions)
    .then((response) => response.json())
    // .then((result) => console.log(result))
    // .catch((error) => console.log("error", error));
};

export default  function ListMovies() {
  interface TokenData {
    token: string;
  }
const [token, setToken] = useState<TokenData | null>(null)
useEffect(() => {
  setToken(localStorage.getItem(token))
})
    // Perform localStorage action
    // const token = localStorage.getItem("token");

// const prueba= typeof window
//   console.log("prueba", prueba)
  // const infoMovies = await fetchListMovies(token);
  // localStorage.setItem("movies", infoMovies)
  // console.log(infoMovies);

  // infoMovies.map((oneMovie) => oneMovie.rating);
}
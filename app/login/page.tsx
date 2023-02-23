"use client";
import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/authLayout/Input";
import ContentLogin from "../components/authLayout/ContentLogin";
import Layout from "../components/authLayout/Layout";
import { useRouter } from "next/navigation";
import Image from "next/image";
import moviesbg from "../../public/movie-bg.jpg";
import "../../styles/styles.css";
import { ButtonProps, LoginProps } from "../components/types";

export default function Login(): JSX.Element {
  {
    const router = useRouter();
    const [loginFail, setLoginFail] = useState(false);
    const [valueUser, setValueUser] = useState("");
    const [valuePassword, setValuePassword] = useState("");
    const fetchLogin = async (email: string, password: string) => {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Accept", "application/json");
      myHeaders.append("Access-Control-Allow-Origin", "*");
      myHeaders.append(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
      );
      myHeaders.append(
        "Access-Control-Allow-Headers",
        "Origin, Content-Type, X-Auth-Token"
      );
      myHeaders.append("Access-Control-Allow-Credentials", "true");

      var raw = JSON.stringify({
        email: email,
        password: password,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
      };

      return fetch(
        "https://kata.conducerevel.com/films/auth/sign-in",
        requestOptions
      ).then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          setLoginFail(true);
          throw new Error(`API Error. Status: ${response.status}`);
        }
      });
    };
    const handleClick = () => {
      setLoginFail(false);
      fetchLogin(valueUser, valuePassword)
        .then((response) => {
          localStorage.setItem("token", response.token);
          router.push("/");
        })
        .catch((error) => console.error("error", error));
    };
    return (
      <Layout>
        <Image
          className="bg-image"
          src={moviesbg}
          alt="movie-collage"
          fill
        ></Image>

        <ContentLogin<any> loginFail={loginFail}>
          <Input
            type="text"
            required
            value={valueUser}
            onChange={(e: any) => {
              setValueUser(e.currentTarget.value);
            }}
            placeholder="Username"
          ></Input>
          <Input
            value={valuePassword}
            type="password"
            required
            onChange={(e: any) => {
              setValuePassword(e.currentTarget.value);
            }}
            placeholder="Password"
          ></Input>
          <Button<any> primary={true} role="button" onClick={handleClick}>
            Sign in
          </Button>
        </ContentLogin>
      </Layout>
    );
  }
}

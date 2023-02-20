"use client";
import { useState } from "react";
import "../../styles/login/login.css";
import Button from "../components/Button";
import Input from "../components/Input";
import ContentLogin from "../components/ContentLogin";
import Layout from "../components/Layout";
import { useRouter } from "next/navigation";

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
    console.log(response);
    
    if (response.ok) {
      console.log("OK");
      return response.json();
    } else {
      throw new Error(`API Error. Status: ${response.status}`);
    }
  });
};

export default function Login() {
  const router = useRouter();
  const [valueUser, setValueUser] = useState("");
  const [valuePassword, setValuePassword] = useState("");
  const handleClick = () => {
    fetchLogin(valueUser, valuePassword)
      .then((response) => {
        localStorage.setItem("token", response.token);
        router.push("/");
      })
      .catch((error) => console.error("error", error));
  };
  return (
    <Layout className="c-login u-flex">
      <ContentLogin className=" u-flex u-flex-center">
        <Input
          className="u-margin-bottom c-login-component-width"
          type="text"
          value={valueUser}
          onChange={(e: any) => {
            setValueUser(e.currentTarget.value);
          }}
          placeholder="Username"
        ></Input>
        <Input
          className="u-margin-bottom c-login-component-width"
          value={valuePassword}
          type="text"
          onChange={(e: any) => {
            setValuePassword(e.currentTarget.value);
          }}
          placeholder="Password"
        ></Input>
        <Button
          className="u-margin-bottom c-login-component-width"
          role="button"
          onClick={handleClick}
        >
          Sign in
        </Button>
      </ContentLogin>
    </Layout>
  );
}

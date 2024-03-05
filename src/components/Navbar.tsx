import Image from "next/image";
import React from "react";
import Logo from "@/assets/logo.svg";
import Container from "./Container";

export default function Navbar() {
  return (
    <header className="flex items-center justify-around w-full h-20 bg-gray-800">
      <Container>
        <div className="flex flex-1 items-center justify-between ">
          <div className="flex items-center">
            <Image src={Logo} alt="Logo do RPG" />
            <ul className="flex items-center gap-5">
              <li>
                <a href="#">Livros</a>
              </li>
              <li>
                <a href="#">Fichas</a>
              </li>
              <li>
                <a href="#">Anotações</a>
              </li>
              <li>
                <a href="#">Upload</a>
              </li>
              <li>
                <a href="#">Ajuda</a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </header>
  );
}

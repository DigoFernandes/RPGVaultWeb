import Image from "next/image";
import React from "react";
import Logo from "@/assets/logo.svg";
import Container from "./Container";
import Search from "./Search";

export default function Navbar() {
  return (
    <header className="flex items-center justify-around w-full h-20 bg-[#463F3A]">
      <Container>
        <div className="flex flex-1 items-center justify-between ">
          <a href="/">
            <Image src={Logo} alt="Logo do RPG" />
          </a>
          <div className="flex items-center gap-[57px] pr-9">
            <ul className="flex items-center gap-5 ">
              <li className="">
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
        <Search />
      </Container>
    </header>
  );
}

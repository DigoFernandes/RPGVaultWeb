import Image from "next/image";
import React from "react";
import Logo from "@/assets/logo.svg";
import IconUser from "@/assets/icon-user.svg";
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
                <a href="#">Download</a>
              </li>
              <li>
                <a href="#">Cadastro</a>
              </li>
              <li>
                <a href="#">Discord</a>
              </li>
              <li>
                <a href="#">Ajuda</a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <button className="flex items-center gap-4 bg-primary-blue h-20 pl-10 z-[1] ">
        <Image src={IconUser} alt="Icon User" />
        <span className="text-white font-bold">Acessar conta</span>
      </button>
    </header>
  );
}

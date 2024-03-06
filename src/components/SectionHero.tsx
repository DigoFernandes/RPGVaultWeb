import React from "react";
import Container from "./Container";
import LibraryImg from "@/assets/library.jpg";
import Image from "next/image";

export default function SectionHero() {
  return (
    <section className="w-full h-[704px] flex justify-center pt-20 bg-gradient">
      <Container>
        <div className="flex-1 max-w-[500px] mb-4 justify-between">
          <h1 className="font-bold text-7xl pb-2">RPGVault</h1>
          <h2 className="text-xl max-w-[608px] mb-8">
            Seu lugar para salvar suas fichas é aqui!
          </h2>
          <p className="text-[16] max-w-[608px] mb-8 ">
            Simplifique seu jeito de jogar! Nada de ficar procurando em pastas
            separadas o que você pode encontrar em um único local!
          </p>
        </div>
        <Image
          className="mt-18 ml-11" // Adicionando margem superior para separar a imagem do texto
          height={700}
          width={700}
          src={LibraryImg}
          alt="magic library"
        />
      </Container>
    </section>
  );
}

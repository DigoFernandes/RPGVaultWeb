import React from "react";
import InputLogin from "./InputLogin";

export default function CadHero() {
  return (
    <div className="min-h-full flex items-center justify-center mt-20">
      <div className="max-w-md w-full space-y-8 ">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-orange-300">
            Crie sua conta!
          </h2>
          <p className="mt-6 text-center text-md">
            Ou
            <a
              href="/login"
              className="hover:text-indigo-300 text-md font-extrabold text-blue-300"
            >
              {" "}
              faça Login
            </a>
          </p>
        </div>

        <form action="" className="mt-8 space-y-6">
          {/* inicio do input */}
          <div className="rounded-md shadow-sm -space-y-px ">
            <div>
              <InputLogin placeHolder="Insira seu nome de usuario" type="text" />
            </div>
            <div>
              <InputLogin placeHolder="Insira seu email" type="email" />
            </div>
            <div>
              <InputLogin placeHolder="Confirme seu email" type="email" />
            </div>
            <div>
              <p className="text-sm text-gray-300">Sua data de nascimento</p>
              <InputLogin placeHolder="Data de Nasciento" type="date" />
            </div>
            <div className="">
              <InputLogin placeHolder="Insira sua senha" type="password" />
            </div>
            <div className="">
              <InputLogin placeHolder="Confirme sua senha" type="password" />
            </div>
            {/* final do input */}
          </div>

          {/* começo do botão */}
          <div className="">
            <p className="text-sm">Ao clicar em registrar você confirma com nossos <a className="underline text-indigo-500 hover:text-indigo-300" href="#">termos de uso</a></p>
            <button className="mt-3 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-500">
              Registrar
            </button>
          </div>
          {/* fim do botão */}
        </form>
      </div>
    </div>
  );
}

import React from "react";

export default function page() {
  return (
    <div className="min-h-full flex items-center justify-center mt-20">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-400">Logue com sua conta</h2>
          <p className="mt-6 text-center text-xl">
            Ou
            <a href="/cadastro"> Crie uma conta</a>
          </p>
        </div>

        <form action="" className="flex flex-col gap-5">
          <input placeholder="Insira seu email" type="email" name="" id="" />
          <input placeholder="Insira sua senha" type="password" name="" id="" />
        </form>
      </div>
    </div>
  );
}

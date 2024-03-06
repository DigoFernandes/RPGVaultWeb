import React from "react";

export default function LoginHero() {
  return (
    <div className="min-h-full flex items-center justify-center mt-20">
      <div className="max-w-md w-full space-y-8 ">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-orange-300">
            Logue com sua conta
          </h2>
          <p className="mt-6 text-center text-md">
            Ou
            <a
              href="/cadastro"
              className=" text-md font-extrabold text-blue-300"
            >
              {" "}
              Crie uma conta
            </a>
          </p>
        </div>

        <form action="" className="mt-8 space-y-6">
          {/* inicio do input */}
          <div className="rounded-md shadow-sm -space-y-px ">
            <div>
              <input
                className="rounded-none block appearance-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md mb-2 focus:outline focus:ring-indigo-500 focus;border-indigo-500 focus:z-10"
                placeholder="Insira seu email"
                required
                type="email"
                name=""
                id=""
              />
            </div>
            <div className="">
              <input
                className="rounded-none block appearance-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md mb-2 focus:outline focus:ring-indigo-500 focus;border-indigo-500 focus:z-10"
                placeholder="Insira sua senha"
                required
                type="password"
                name=""
                id=""
              />
            </div>
            {/* final do input */}
          </div>

          {/* lembrar/esquecer senha inicio */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-indigo-400 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-400 ">
                Lembrar de mim
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-500 hover:text-indigo-400"
              >
                Esqueci minha senha
              </a>
            </div>
          </div>
          {/* lembrar/esquecer senha fim */}

          {/* começo do botão */}
          <div className="">

            <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-500">Logar</button>
          </div>
          {/* fim do botão */}
        </form>
      </div>
    </div>
  );
}

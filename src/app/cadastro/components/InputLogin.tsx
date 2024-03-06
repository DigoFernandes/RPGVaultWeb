import React from 'react'

type Props ={
    placeHolder: string,
    type: string,
}

export default function InputLogin({placeHolder, type} : Props) {
  return (
    <input
      className="rounded-none block appearance-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md mb-2 focus:outline focus:ring-indigo-500 focus;border-indigo-500 focus:z-10"
      placeholder={placeHolder}
      required
      type={type}
      name=""
      id=""
    />
  );
}

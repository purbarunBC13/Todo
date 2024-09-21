import React, { useState } from "react";
import InputPart from "./InputPart";
import Lists from "./Lists";
import Filter from "./Filter";

const Container = () => {
  return (
    <>
      <div className="container h-[40rem] w-[30rem] border-2 border-red-500 p-3 mx-auto rounded-lg flex flex-col items-center gap-3">
        <div className="text-2xl text-center bg-blue-400 p-3 rounded-lg text-yellow-200 font-bold w-full">
          My TODO APP
        </div>
        <InputPart />
        <Filter />
        <Lists />
      </div>
    </>
  );
};

export default Container;

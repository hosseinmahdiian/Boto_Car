import Back from "../icons/Back";
import Card from "../module/card";
import { useRouter } from "next/router";
import React from "react";

const FilterCars = ({ filtred }) => {
  const router = useRouter();


  return (
    <div className="mx-auto contents">
      <div
        onClick={() => {
          router.push("/");
        }}
        className="flex items-center gap-2 mt-4 rounded-lg bg-lime-400 w-fit px-2 py-1 ml-2"
      >
        <Back />
        <p>Back</p>
      </div>
      {filtred?.length > 0 ? (
        <div className="px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-4 ">
          {filtred?.map((i) => (
            <Card {...i} key={i.id} />
          ))}
        </div>
      ) : (
        <p className="text-center font-bold mt-5 text-lg">Not Result</p>
      )}
    </div>
  );
};

export default FilterCars;

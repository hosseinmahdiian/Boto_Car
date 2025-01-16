import Link from "next/link";
import Back from "../icons/Back";
import Calender from "../icons/Calender";
import Company from "../icons/Company";
import Location from "../icons/Location";
import Model from "../icons/Model";
import Money from "../icons/Money";
import Road from "../icons/Road";
import { useRouter } from "next/router";

const CarDetales = (car) => {
  const {
    name,
    id,
    price,
    location,
    distance,
    year,
    model,
    description,
    image,
    category,
  } = car;

  const router = useRouter();
  return (
    <div className="container mx-auto px-5">
      <div
        onClick={() => {
          router.back();
        }}
        className="flex items-center gap-2 mt-4 rounded-lg bg-lime-400 w-fit px-2 py-1"
      >
        <Back />
        <p>Back</p>
      </div>
      <img
        src={image}
        className="rounded-md mt-6 w-10/12 lg:w-8/12 max-h-[550px] object-cover mx-auto "
      />
      <h1 className="text-xl font-bold my-2">{name}</h1>
      <div className="w-full shadow-md border  rounded-xl p-4">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <Company />
            <p className="font-semibold">Company</p>
          </div>
          <h3 className="text-gray-600">{name}</h3>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <Model />
            <p className="font-semibold">Model</p>
          </div>
          <h3 className="text-gray-600">{model}</h3>
        </div>{" "}
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <Calender />
            <p className="font-semibold">First registation</p>
          </div>
          <h3 className="text-gray-600">{year}</h3>
        </div>{" "}
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <Road />
            <p className="font-semibold">Kms driven</p>
          </div>
          <h3 className="text-gray-600">{distance}</h3>
        </div>
      </div>

      <div className="flex items-center justify-between  w-full shadow-md border my-5 rounded-xl p-4">
        <div className="flex items-center gap-2">
          <Location />
          <p className="font-semibold">Location</p>
        </div>
        <h3 className="text-gray-600">{location}</h3>
      </div>

      <div className=" w-full shadow-md border my-5 rounded-md p-4">
        <h3 className="font-bold my-2"> Infomation of car</h3>
        <p className="text-justify">{description}</p>
      </div>

      <div className="flex items-center justify-between  w-full shadow-md border my-5 rounded-xl p-4">
        <div className="flex items-center gap-2">
          <Money />
          <p className="font-semibold">Price :</p>
        </div>
        <h3 className="text-gray-600">$ {price}</h3>
      </div>
    </div>
  );
};

export default CarDetales;

import Link from "next/link";
import Location from "../icons/Location";
import { sp } from "@/function/function";

const Card = (props) => {
  const { id, name, model, year, distance, location, image, price } = props;
  return (
    <Link href={`/cars/${id}`}>
      <div className="border rounded-md p-2 shadow-lg">
        <img src={image} className="rounded-lg   object-cover " />
        <h4 className="font-bold ">{name}</h4>
        <p className="text-gray-500">
          {year}.{distance}km
        </p>
        <div className="flex items-center justify-between w-full">
          <p className="rounded-2xl bg-lime-400 px-2">$ {sp(price)}</p>
          <div className="flex items-center">
            <p>{location}</p>
            <Location />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;

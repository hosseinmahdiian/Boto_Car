import Link from "next/link";
import Sedan from "../icons/Sedan";
import Suv from "../icons/Suv";
import Sport from "../icons/Sport";
import Hatchback from "../icons/Hatchback";

const Categoris = () => {
  return (
    <div className="p-1 bg-white shadow-md border rounded-lg  items-center gap-2 max-w-lg mx-auto text-center grid grid-cols-2 lg:grid-cols-4">
      <Link href="/categoris/sedan" className="bg-lime-400 rounded-lg w-full">
        <div className="w-fit mx-auto">
          <Sedan className="hidden" />
          <p className="">Sedan</p>
        </div>
      </Link>

      <Link href="/categoris/suv" className="bg-lime-400 rounded-lg w-full  ">
        <div className="w-fit mx-auto">
          <Suv />
          <p>SUV</p>
        </div>
      </Link>

      <Link
        href="/categoris/hatchback"
        className="bg-lime-400 rounded-lg w-full"
      >
        <div className="w-fit mx-auto">
          <Hatchback />
          <p>Hatchback</p>
        </div>
      </Link>

      <Link href="/categoris/sport" className="bg-lime-400 rounded-lg w-full">
        <div className="w-fit mx-auto">
          <Sport />
          <p>Sport</p>
        </div>
      </Link>
    </div>
  );
};

export default Categoris;

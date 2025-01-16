import Link from "next/link";
import Card from "../module/card";
import Back from "../icons/Back";
import { useRouter } from "next/router";

const CarsList = ({ carItems }) => {
  console.log(carItems);
  const router = useRouter();

  return (
    <div className="container mx-auto ">
      <div
        onClick={() => router.back()}
        className="flex items-center gap-2 mt-4 rounded-lg bg-lime-400 w-fit px-2 py-1   ml-2 border"
      >
        <Back />
        <p>Back</p>
      </div>

      <div className=" px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-4 ">
        {carItems?.map((car) => (
          <Card {...car} key={car.id} />
        ))}
      </div>
    </div>
  );
};

export default CarsList;

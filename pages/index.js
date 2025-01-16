import SearchBox from "../components/module/searchBox";
import Categoris from "../components/module/categoris";
import CarsPage from "../components/template/carsPage";
import carsData from "../data/carsData";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const cars = carsData.slice(0, 4);
  return (
    <div className="  container mx-auto">
      <SearchBox />
      <Categoris />
      <div
        onClick={() => router.push('/cars')}
        className=" !max-w-lg rounded-lg bg-lime-400 mx-auto border text-center mt-4 py-2"
      >
        See All Cars
      </div>
      <CarsPage data={cars} />
    </div>
  );
}

import Categoris from "../../components/module/categoris";
import CarsPage from "../../components/template/carsPage";
import SearchBox from "../../components/module/searchBox";
import carsData from "../..//data/carsData";
import Back from "@/components/icons/Back";
import { useRouter } from "next/router";
const cars = () => {
  const router = useRouter();

  return (
    <div className="container mx-auto">
      <SearchBox />
      <Categoris />
      <div
        onClick={() => router.back()}
        className="flex items-center gap-2 mt-4 rounded-lg bg-lime-400 w-fit px-2 py-1   ml-2 border "
      >
        <Back />
        <p>Back</p>
      </div>
      <CarsPage data={carsData} />
    </div>
  );
};

export default cars;

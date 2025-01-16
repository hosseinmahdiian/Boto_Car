import { useRouter } from "next/router";
import Categoris from "@/components/module/categoris";
import carsData from "@/data/carsData";
import CarsList from "@/components/template/carsList";
const Category = () => {
  const route = useRouter();
  // console.log(route.query.category);
  let carItems = carsData.filter(
    (car) => car.category === route.query.category
  );
  console.log(carItems);

  return <CarsList carItems={carItems} />;
};

export default Category;

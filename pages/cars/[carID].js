import { useRouter } from "next/router";
import carsData from "../../data/carsData";
import CarDetales from "@/components/template/carDetales";

const CarID = () => {
  const router = useRouter();
  const { carID } = router.query;
  const car = carsData.find((i) => i.id == carID);
  console.log(car);
  return (
    <CarDetales {...car}/>
  );
};

export default CarID;

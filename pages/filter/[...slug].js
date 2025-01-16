import FilterCars from "@/components/template/filterCars";
import carsData from "@/data/carsData";
import { useRouter } from "next/router";

const Slug = () => {
  const router = useRouter();

  const [min, max] = router.query.slug || [];

  const filtred = carsData.filter((i) => i.price > min && i.price < max);

  return <FilterCars filtred={filtred} />
};

export default Slug;

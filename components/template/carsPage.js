import React from "react";
import Card from "../module/card";

const CarsPage = ({data}) => {
  return (
    <div className=" container mx-auto px-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-4">
      {data?.map((i) => (
       <Card key={i.id} {...i}/>
      ))}
    </div>
  );
};

export default CarsPage;

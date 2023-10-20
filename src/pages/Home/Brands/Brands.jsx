import React, { useEffect, useState } from "react";
import Brand from "./Brand";
import Spinner from "../../../components/Spinner";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://tech-store-server-one.vercel.app/brands")
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h3 className="text-3xl font-bold text-gray-500 my-5">Our Brands</h3>
      {isLoading && <Spinner></Spinner>}
      {/* brands container  */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {brands?.map((brand) => (
          <Brand key={brand._id} brand={brand}></Brand>
        ))}
      </div>
    </div>
  );
};

export default Brands;

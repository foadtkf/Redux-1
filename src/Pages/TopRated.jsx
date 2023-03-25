import React from "react";
import { useProducsts } from "../context/ProductProvider";
import { CiStar } from "react-icons/ci";
const TopRated = () => {
  const {
    state: { data },
  } = useProducsts();
  return (
    <div className="grid md:grid-cols-3 gap-4 mx-[10%]">
      {data
        ?.filter((product) => product.rating.rate > 4)
        .map((product, index) => (
          <div
            key={index}
            className="card w-full px-[5%] pb-[3%] bg-base-100 shadow-xl "
          >
            <div className="w-[50%] mx-auto">
              <img
                className=" max-h-[30vh] min-h-[30vh] mx-auto "
                src={product.image}
                alt="Shoes"
              />
            </div>
            <div className="card-body">
              <h2 className="text-sm text-left">
                {product.title}
                <div className="badge text-[10px] flex justify-center">
                  {product.rating.rate} <CiStar className="my-auto" />
                </div>
              </h2>
              <p className="text-[12px] text-justify">{product.description}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TopRated;

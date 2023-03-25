import React from "react";
import { useProducsts } from "../context/ProductProvider";

const MoreDeep = () => {
  const {
    state: { data },
  } = useProducsts();
  console.log(data);
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {data?.map((product, index) => (
        <div key={index} className="card w-full bg-base-100 shadow-xl">
          <div className="w-[50%] mx-auto">
            <img className="" src={product.image} alt="Shoes" />
          </div>
          <div className="card-body">
            <h2 className="text-sm text-left">
              {product.title}
              <div className="badge text-[10px]">NEW</div>
            </h2>
            <p className="text-[12px] text-justify">{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoreDeep;

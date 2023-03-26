import React from "react";
import { useProducsts } from "../context/ProductProvider";
import { CiStar } from "react-icons/ci";
import { actionTypes } from "../states/ProductState/actiontypes";

const MoreDeep = () => {
  const {
    state: { data },
    dispatch,
  } = useProducsts();
  console.log(data);
  return (
    <div className="grid md:grid-cols-3 gap-4 mx-[10%]">
      {data?.map((product, index) => (
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
          <div className="">
            <h2 className="text-sm text-left">
              {product.title}
              <div className="badge text-[10px] flex justify-center">
                {product.rating.rate} <CiStar className="my-auto" />
              </div>
            </h2>
            <p className="text-[12px] text-justify">
              {product.description.slice(0, 200)}
            </p>
            <button
              className="btn btn-primary"
              onClick={() =>
                dispatch({
                  type: actionTypes.ADD_TO_CART,
                  payload: product,
                })
              }
            >
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoreDeep;

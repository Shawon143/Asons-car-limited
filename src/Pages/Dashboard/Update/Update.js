import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const Update = () => {
  const { register, handleSubmit } = useForm();
  const { id } = useParams();
  const [product, setProduct] = useState();
  useEffect(() => {
    fetch(
      `https://secure-savannah-57360.herokuapp.com/dashboard/manageproducts/update/${id}`
    )
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const updatehandle = (e) => {
    const url = `https://secure-savannah-57360.herokuapp.com/cars/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(e),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Updated Successfully");
        }
      });
  };

  return (
    <div className="text-white">
      <h2>update page for {id}</h2>
      <p>{product?.name}</p>
      <form className="my-5 w-50 mx-auto" onSubmit={handleSubmit(updatehandle)}>
        {product?.name && (
          <input
            className="form-control mb-3"
            defaultValue={product?.name}
            {...register("name")}
            placeholder="name"
          />
        )}
        {product?.details && (
          <input
            className="form-control mb-3"
            defaultValue={product?.details}
            {...register("details")}
            placeholder="details"
          />
        )}
        {product?.img && (
          <input
            className="form-control mb-3"
            defaultValue={product?.img}
            {...register("img")}
            placeholder="image link"
          />
        )}
        {product?.price && (
          <input
            className="form-control mb-3"
            defaultValue={product?.price}
            type="text"
            {...register("price")}
            placeholder="price "
          />
        )}
        {product?.catagory && (
          <input
            className="form-control mb-3"
            defaultValue={product?.catagory}
            type="text"
            {...register("catagory")}
            placeholder="Catagory "
          />
        )}

        {/* <input
          className="form-control mb-3"
          defaultValue={product?.details}
          {...register("details")}
          placeholder="details"
        />
        <input
          className="form-control mb-3"
          defaultValue={product?.img}
          {...register("img")}
          placeholder="image link"
        />
        <input
          className="form-control mb-3"
          defaultValue={product?.price}
          type="text"
          {...register("price")}
          placeholder="price "
        />
        <input
          className="form-control mb-3"
          defaultValue={product?.catagory}
          type="text"
          {...register("catagory")}
          placeholder="Catagory "
        /> */}

        <input type="submit" />
      </form>
    </div>
  );
};

export default Update;

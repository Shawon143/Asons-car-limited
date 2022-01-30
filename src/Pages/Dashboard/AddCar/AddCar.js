import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const AddCar = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://secure-savannah-57360.herokuapp.com/cars", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Added Successfully");
          reset();
        }
      });
  };
  return (
    <div>
      <h2 className="my-3 text-white">ADD A Car</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="my-5 w-50 mx-auto">
        <input
          className="form-control mb-3"
          {...register("name")}
          placeholder="name"
        />
        <input
          className="form-control mb-3"
          {...register("details")}
          placeholder="details"
        />
        <input
          className="form-control mb-3"
          {...register("img")}
          placeholder="image link"
        />
        <input
          className="form-control mb-3"
          type="text"
          {...register("price")}
          placeholder="price "
        />
        <input
          className="form-control mb-3"
          type="text"
          {...register("catagory")}
          placeholder="Catagory "
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddCar;

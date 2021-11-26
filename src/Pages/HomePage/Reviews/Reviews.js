import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const Reviews = (props) => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  // const { name } = props.car;

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://secure-savannah-57360.herokuapp.com/reviews", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Added Successfully");
          reset();
        }
      });
  };
  return (
    <div>
      {/* <h2 className="mt-3 text-white">ADD Your Reviews</h2> */}
      {/* {props?.car?.name && <h2>{props.car.name}</h2>} */}
      {!props?.car?.name && (
        <h2 className="mt-3 text-white">ADD Your Reviews</h2>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="my-2 w-50 mx-auto">
        <input
          className="form-control mb-3"
          {...register("name", { required: true, maxLength: 20 })}
          placeholder="Your name"
          value={user.displayName}
        />

        {props?.car?.name && (
          <input
            className="form-control mb-3"
            {...register("CarName", { required: true })}
            placeholder="Your name"
            value={props.car.name}
          />
        )}

        <textarea
          className="form-control mb-3"
          {...register("details")}
          placeholder="Your Review"
        />

        <input type="submit" />
      </form>
    </div>
  );
};

export default Reviews;

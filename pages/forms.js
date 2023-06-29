/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useForm } from "react-hook-form";

const forms = () => {
  const { register, watch, handleSubmit } = useForm();
  const onVaild = () => {
    console.log("first");
  };
  const onInvalid = (errors) => {
    console.log(errors);
  };
  // register : state 연결 (key ,value, onchange, ref)
  // ...register([key],{})
  // watch 로 보면 register key값으로 등록
  return (
    <form onSubmit={handleSubmit(onVaild, onInvalid)}>
      <input
        {...register("userName", {
          required: "user name is requ",
          minLength: { message: "more", value: 5 },
        })}
        type="text"
        placeholder="UserName"
      />
      <input
        type="email"
        {...register("email", { required: "email is required" })}
        placeholder="Email"
      />
      <input
        type="password"
        {...register("password", { required: "password is required" })}
        placeholder="Password"
      />

      <input type="submit" value="submit" />
    </form>
  );
};

export default forms;

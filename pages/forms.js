/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useForm } from "react-hook-form";

const forms = () => {
  const { register, watch, handleSubmit } = useForm();
  const onVaild = () => {
    console.log("first");
  };
  // register : state 연결 (key ,value, onchange, ref)
  // ...register([key],{})
  // watch 로 보면 register key값으로 등록
  return (
    <form onSubmit={handleSubmit(onVaild)}>
      <input
        {...register("userName", { required: true })}
        type="text"
        placeholder="UserName"
      />
      <input
        type="email"
        {...register("email", { required: true })}
        placeholder="Email"
      />
      <input
        type="password"
        {...register("password", { required: true })}
        placeholder="Password"
      />

      <input type="submit" value="submit" />
    </form>
  );
};

export default forms;

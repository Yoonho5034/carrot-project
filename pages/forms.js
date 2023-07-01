/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useForm } from "react-hook-form";

const forms = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    // formState: { errors }을 통해 확장하여 사용가능
  } = useForm({ mode: "onBlur" });
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
        {...register("email", {
          required: "email is required",
          validate: {
            notGmail: (value) =>
              !value.includes("@gmail.com") || "not allow gmail",
          },
        })}
        placeholder="Email"
      />
      <input
        type="password"
        {...register("password", { required: "password is required" })}
        placeholder="Password"
      />
      {errors?.email?.message}
      <input type="submit" value="submit" />
    </form>
  );
};

export default forms;

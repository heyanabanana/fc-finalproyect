import React from "react";
import { useForm } from "react-hook-form";

// components
import TextInput from "../layout/Forms/TextInput";
import ButtonAccent from "../layout/Buttons/ButtonAccent";
import ErrorForm from "../layout/Forms/ErrorForm";
import CheckBox from "../layout/Forms/CheckBox";
import LinkAccent from "../layout/Site/LinkAccent";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col mt-8 mb-80,
    ,0-"
    >
      <TextInput
        htmlFor="email"
        label="Email"
        placeholder="Introduce tu correo"
        {...register("email", { required: true })}
        type="text"
      />
      {errors.email && <ErrorForm text="El email es necesaria" />}
      <TextInput
        htmlFor="password"
        label="Contraseña"
        placeholder="Introduce tu contraseña"
        {...register("password", { required: true })}
        type="password"
      />
      {errors.password && <ErrorForm text="La contraseña es necesaria" />}
      <span className="mt-5 mb-8 flex items-center justify-between">
        <CheckBox label="Recuérdame" {...register("remember_token")} />
        <LinkAccent text="He olvidado la contraseña" />
      </span>
      <Link to="/dashboard">
        <ButtonAccent type="submit" text="Iniciar Sesión" />
      </Link>
    </form>
  );
};

export default LoginForm;

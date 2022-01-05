import React from "react";
import { useForm, Controller } from "react-hook-form";
import LabelInput from "../layout/Forms/LabelInput";
import TextInput from "../layout/Forms/TextInput";
import ButtonAccent from "../layout/Buttons/ButtonAccent";
import ErrorForm from "../layout/Forms/ErrorForm";
import CheckBox from "../layout/Forms/CheckBox";

const LoginForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <span className="mb-5 flex flex-col">
      <LabelInput htmlFor="email" label="Email" />
      <TextInput
        placeholder="Introduce tu correo"
        {...register("email", { required: true })}
        type="text"
      />
      {errors.email && <ErrorForm text="El email es necesaria" />}
      </span><LabelInput htmlFor="password" label="Contraseña" />
      <TextInput
        placeholder="Introduce tu contraseña"
        {...register("password", { required: true })}
        type="password"
      />
      {errors.password && <ErrorForm text="La contraseña es necesaria" />}
      <span className="mt-5 mb-8 flex items-center justify-between">
        <span className="flex items-center">
          <CheckBox {...register("remember_token")} />
          <label htmlFor="remember" className="text-sm text-black">
            Recuérdame
          </label>
        </span>
        <span className="cursor-pointer text-sm text-primary font-semibold">
          He olvidado la contraseña
        </span>
      </span>
      <ButtonAccent type="submit" text="Iniciar Sesión" />
    </form>
  );
};

export default LoginForm;

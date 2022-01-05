import React from "react";
import { useForm, Controller } from "react-hook-form";
import LabelInput from "../layout/Forms/LabelInput";
import TextInput from "../layout/Forms/TextInput";

const Loginform = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <LabelInput htmlFor="email" label="Email" />
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextInput type="text" placeholder="Introduce tu correo" {...field} />
        )}
      />
      {errors.email && <span className="text-red">El email es necesario</span>}

      <LabelInput htmlFor="password" label="Contraseña" />
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <TextInput
            type="password"
            placeholder="Introduce tu contraseña"
            {...field}
          />
        )}
      />
      {errors.password && (
        <span className="text-red">La contraseña es necesaria</span>
      )}
      <span className="mt-5 mb-8 flex items-center justify-between">
        <span className="flex items-center">
          <input
            type="checkbox"
            className="form-check-input appearance-none h-3 w-3 border border-gray-medium rounded-sm bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            placeholder="Introduce tu contraseña"
          />
          <label htmlFor="remember" className="text-sm text-black">
            Recuérdame
          </label>
        </span>
        <span className="cursor-pointer text-sm text-primary font-semibold">
          He olvidado la contraseña
        </span>
      </span>
      <button className="bg-primary p-4 text-white font-semibold rounded-xl">
        Iniciar Sesión
      </button>
    </form>
  );
};

export default Loginform;

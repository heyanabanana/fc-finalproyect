import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextInput from "../layout/Forms/TextInput";
import SelectInput from "../layout/Forms/SelectInput";
import ErrorForm from "../layout/Forms/ErrorForm";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FileInput from "../layout/Forms/FileInput";
import DataList from "../layout/Forms/DataListInput";
import candidatesData from "../../data/CANDIDATESDATA.json";
import skillsData from "../../data/SKILLSDATA.json";
import TagGray from "../layout/Tags/TagGray";
import { XIcon } from "@heroicons/react/outline";
//TODO CLEAR

const Newcandidate = (props) => {
  const schema = yup.object().shape({
    fullname: yup.string().required("Nombre y apellidos necesarios"),
    country: yup.string().required("El país es necesario"),
    city: yup.string().required("La ciudad es necesaria"),
    phone: yup
      .number("El numero no es válido")
      .required("El número es necesario"),
    email: yup
      .string()
      .required("El email es necesario")
      .email("Email no valido"),
    remote: yup.boolean().required(),
    mobility: yup.boolean().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: "onChange",

    resolver: yupResolver(schema),
  });

  const [curriculum, setCurriculum] = useState();
  const [skills, setSkills] = useState([]);

  const onSubmit = (data) => console.log(data);
  const onSelect = (e) => {
    setSkills((skills) => [...skills, e.label]);
  };

  const deleteSkill = (i) => {
    setSkills(skills.filter((item) => item.label !== i.label));
  };
  return (
    <span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <span className="flex w-auto justify-center px-10">
          <span className="flex flex-col mr-10">
            {" "}
            <TextInput
              htmlFor="fullname"
              label="Nombre y Apellidos"
              placeholder="Ej: Juan Pérez Lorca"
              {...register("fullname", { required: true })}
              type="text"
            />
            {errors.fullname && <ErrorForm text={errors.fullname} />}
            <span className="flex justify-between">
              <SelectInput
                label="País"
                htmlFor="Pais"
                {...register("country", { required: true })}
                options={candidatesData.map((values) => {
                  return (
                    <option key={values.id} value={values.country}>
                      {values.country}
                    </option>
                  );
                })}
              />
              {errors.country && <ErrorForm text={errors.country} />}

              <SelectInput
                label="Ciudad"
                htmlFor="Ciudad"
                {...register("city", { required: true })}
                options={candidatesData.map((values) => {
                  return (
                    <option key={values.id} value={values.city}>
                      {values.city}
                    </option>
                  );
                })}
              />
              {errors.city && <ErrorForm text={errors.city} />}
            </span>
            <span className="flex justify-between">
              <TextInput
                htmlFor="phone"
                label="Nº Teléfono"
                placeholder="Ej: +34 612 34 56 78"
                {...register("phone", { required: true })}
                type="text"
              />
              {errors.phone && <ErrorForm text={errors.phone} />}

              <TextInput
                htmlFor="email"
                label="Email"
                placeholder="Ej: user@mail.com"
                {...register("email", { required: true })}
                type="text"
              />
              {errors.email && <ErrorForm text={errors.email} />}
            </span>
            <span className="flex justify-between">
              <SelectInput
                label="Presencialidad"
                htmlFor="Presencialidad"
                {...register("remote", { required: true })}
                options={
                  <>
                    <option value={true} default>
                      Presencial
                    </option>
                    <option value={false}>En remoto</option>
                  </>
                }
              />
              {errors.remote && <ErrorForm text={errors.remote} />}

              <SelectInput
                label="Traslado"
                htmlFor="Traslado"
                {...register("mobility", { required: true })}
                options={
                  <>
                    <option value={true} default>
                      Si
                    </option>
                    <option value={false}>No</option>
                  </>
                }
              />
              {errors.remote && <ErrorForm text={errors.remote} />}
            </span>
          </span>
          <span className="w-auto ml-5">
            <FileInput
              text="Subir imagen"
              label="Foto de perfil"
              filesType=" .png, .jpg, y .jpeg"
              filesSize="2 MB"
            />
            <FileInput
              text="Subir imagen"
              label="Documento CV"
              filesType=" .pdf"
              filesSize="20 MB"
            />
            <span className="mb-6">
              <DataList values={skillsData} onSelect={onSelect} />
              <span className="flex">
                {skills &&
                  skills.map((skill) => (
                    <TagGray
                      key={skill}
                      skill={skill}
                      icon={<XIcon className="w-4" />}
                      onClick={() => {
                        deleteSkill(skill);
                      }}
                    />
                  ))}
              </span>
            </span>
          </span>
        </span>
        <span className="flex w-full justify-end h-auto mr-3 cursor-pointer">
          <button
            className="disabled:bg-gray-dark bg-primary mr-3 text-white font-semibold px-4 py-2  rounded-lg border flex items-center "
            type="submit"
            disabled={!isDirty || !isValid}
          >
            Guardar
          </button>{" "}
          <span
            onClick={props.onHide}
            className=" bg-gray-dark text-white font-semibold px-4 py-2 rounded-lg border flex items-center hover:bg-gray-medium"
          >
            Cancelar
          </span>
        </span>
      </form>
    </span>
  );
};

export default Newcandidate;

import React from "react";
import AvatarCandidate from "../layout/Utils/AvatarCandidate";
import CardTemplate from "../layout/Utils/CardTemplate";
import {
  LocationMarkerIcon,
  CloudUploadIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import TextInput from "../layout/Forms/TextInput";
import { useForm } from "react-hook-form";

//TODO CLEAR QUE ESTA TERRIBLE
const CandidateProfile = (props) => {
  return (
    <CardTemplate>
      <span className="flex flex-col md:flex-row items-center">
        <AvatarCandidate avatar={props.avatar} fullname={props.fullname} />
        <span className="flex flex-col">
          <h1 className="text-2xl font-bold">{props.fullname}</h1>
          <span className="text-gray-dark flex text-sm">
            <LocationMarkerIcon className="w-5 mr-3" />
            <p className="mr-2">{props.city}</p> <p className="mr-2">|</p>
            <p>{props.country}</p>
          </span>
        </span>
      </span>
      <span className="flex flex-col mt-10 h-auto">
        <TextInput label="Nombre y apellidos" defaultValue={props.fullname} />
        <span className="flex justify-between mt-3">
          {" "}
          <span className="flex flex-col w-full mr-3">
            <label className="font-semibold" htmlFor="fullname">
              Nº Teléfono
            </label>
            <input
              type="text"
              className="mt-1 bg-gray-light p-3 rounded-lg focus:outline-primary border-none "
              defaultValue="+34 654 85 52 48"
            />
          </span>
          <span className="flex flex-col w-full ml-3">
            <label className="font-semibold" htmlFor="fullname">
              Email
            </label>
            <input
              type="text"
              className="mt-1 bg-gray-light p-3 rounded-lg focus:outline-primary border-none "
              defaultValue="hcliment@gmail.com"
            />
          </span>
        </span>{" "}
        <span className="flex justify-between mt-3">
          <span className="flex flex-col w-full mr-3">
            <label className="font-semibold" htmlFor="fullname">
              País
            </label>
            <select className="mt-1 bg-gray-light p-3 rounded-lg focus:outline-primary border-none ">
              <option>España</option>
              <option>Lisboa</option>
              <option>Italia</option>
            </select>
          </span>
          <span className="flex flex-col w-full ml-3">
            <label className="font-semibold" htmlFor="fullname">
              Ciudad
            </label>
            <select className="mt-1 bg-gray-light p-3 rounded-lg focus:outline-primary border-none ">
              <option>Valencia</option>
              <option>Sevilla</option>
              <option>Gijón</option>
            </select>
          </span>
        </span>
        <span className="flex justify-between mt-3">
          <span className="flex flex-col w-full mr-3">
            <label className="font-semibold" htmlFor="fullname">
              Traslado
            </label>
            <select className="mt-1 bg-gray-light p-3 rounded-lg focus:outline-primary border-none ">
              <option>Si</option>
              <option>No</option>
            </select>
          </span>
          <span className="flex flex-col w-full ml-3 mb-8">
            <label className="font-semibold" htmlFor="fullname">
              Presencialidad
            </label>
            <select className="mt-1 bg-gray-light p-3 rounded-lg focus:outline-primary border-none ">
              <option>En remoto</option>
              <option>Presencial</option>
            </select>
          </span>
        </span>
        <span class="mt-1">
          <span className="flex flex-col">
            <label className="font-semibold" htmlFor="fullname">
              Documento CV
            </label>
            <span className="flex">
              <button class=" cursor-pointer bg-gray-dark rounded-xl text-white font-semibold py-3 px-4 w-fit inline-flex items-center">
                <CloudUploadIcon className="w-5" />
                <span class="ml-2">Subir de nuevo</span>{" "}
                <input
                  class=" absolute block opacity-0 pin-r pin-t"
                  type="file"
                  name="vacancyImageFiles"
                />
              </button>
              <button class="ml-3 cursor-pointer border border-gray-medium rounded-xl font-semibold py-3 px-4 w-fit inline-flex items-center">
                <TrashIcon className="w-5" />
                <span class="ml-2">Borrar</span>{" "}
              </button>{" "}
            </span>
          </span>
        </span>
        <span className="mt-5"></span>
      </span>
    </CardTemplate>
  );
};

export default CandidateProfile;

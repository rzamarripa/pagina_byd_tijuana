"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { askQuoteFormValidation as eventsFormValidation } from "@/schemas";
import { FormField } from "../FormField";
import { Button } from "../PrimaryButton";

type FormData = {
  car: string;
  name: string;
  lastname: string;
  email: string;
  phoneNumber: string;
  message: string;
};

const options = [
  "BYD HAN",
  "BYD TANG",
  "YUAN PLUS",
  "BYD SEAL",
  "BYD DOLPHIN",
  "BYD DOLPHIN MINI",
  "BYD KING DM-i",
  "BYD SONG PLUS DM-i",
  "BYD SHARK",
  "BYD SONG PRO DM-i",
];

export const EventsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    setError,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(eventsFormValidation),
  });

  const onSubmit = async (data: FormData) => {
    if (!data.phoneNumber && !data.email) {
      const fields: Array<"phoneNumber" | "email"> = ["phoneNumber", "email"];
      fields.forEach((field) =>
        setError(field, {
          type: "manual",
          message: `Por favor, introduce un ${
            field === "phoneNumber"
              ? "Número de Teléfono"
              : "Correo Electrónico"
          }`,
        })
      );
      return;
    }

    if (data.phoneNumber && !/^\d{10}$/.test(data.phoneNumber)) {
      setError("phoneNumber", {
        type: "manual",
        message: "El número de teléfono debe tener 10 dígitos",
      });
      return;
    }

    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      setError("email", {
        type: "manual",
        message: "El correo debe tener un formato válido",
      });
      return;
    }

    try {
      const response = await fetch("/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || result.message);
      }

      reset();
    } catch (error) {
      console.error(error);
    }
  };

  const className =
    "bg-transparent border-0 border-b-2 border-b-[#c6c7c6] focus:outline-none text-white placeholder-white text-base bg-none leading-[50px]";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2 w-full relative backdrop-blur-lg contrast-[58%] text-white rounded-[10px]"
    >
      <div className="bg-black/50 px-[30px] pt-[37px] pb-[45px] flex w-full flex-col items-center">
        <h2 className="text-[32px] font-semibold text-white leading-snug">
          Selecciona un Modelo
        </h2>
        <FormField
          type="select"
          placeholder="Selecciona un modelo"
          name="car"
          register={register}
          error={errors.car}
          options={options}
          className={`${className} mt-6`}
          required
        />
      </div>
      <div className="px-[30px] pb-[54px] mt-5 flex w-full flex-col">
        <div className="flex justify-between gap-8 w-full max-img:flex-col max-img:gap-2">
          <FormField
            type="text"
            name="name"
            register={register}
            error={errors.name}
            placeholder="Nombre"
            className={className}
            required
          />
          <FormField
            type="text"
            name="lastname"
            register={register}
            error={errors.lastname}
            placeholder="Apellidos"
            className={className}
            required
          />
        </div>

        <FormField
          type="text"
          name="email"
          register={register}
          error={errors.email}
          placeholder="Correo Electrónico"
          required
          className={className}
        />
        <FormField
          type="text"
          name="phoneNumber"
          register={register}
          error={errors.phoneNumber}
          placeholder="Número de Teléfono"
          required
          className={className}
        />

        <FormField
          type="textarea"
          name="message"
          register={register}
          error={errors.message}
          placeholder="Mensaje"
          className={className}
        />

        <Button
          disabled={isSubmitting}
          className={`
            w-[50%]
            uppercase
            mx-auto

            mt-5
            
            max-img:w-[90%]
            max-img:h-[12.222222vw]
            max-img:leading-[12.222222vw]
            max-img:text-[4.444444vw] 
            max-img:my-[11.666667vw]
            `}
          color="white"
          type="submit"
          loading={isSubmitting}
        >
          Enviar
        </Button>
      </div>

      {isSubmitSuccessful && (
        <div className="absolute h-full w-full bg-black/95 backdrop-blur-xl contrast-[50%]">
          <div className="flex flex-col gap-4 items-center justify-center h-[60%] animate-fade-in duration-150">
            <p className="text-2xl font-bold">¡Gracias por registrarte!</p>
            <p className="text-lg">Nos pondremos en contacto contigo.</p>
            <Button
              className="w-[25%]"
              color="white"
              type="button"
              onClick={() => reset()}
            >
              Volver
            </Button>
          </div>
        </div>
      )}
    </form>
  );
};

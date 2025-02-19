"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField } from "./FormField";
import { Button } from "./PrimaryButton";
import { askQuoteFormValidation } from "@/schemas";
import { cn } from "@/lib";

type FormData = {
  car: string;
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
};

const options = [
  "BYD HAN",
  "BYD TANG",
  "YUAN PLUS EV",
  "BYD SEAL",
  "BYD DOLPHIN",
  "BYD DOLPHIN MINI",
  "BYD KING",
  "BYD SONG PLUS DM-i",
  "BYD SHARK",
  "BYD SONG PRO DM-i",
];

export const AskQuoteForm = ({
  car,
  className,
}: {
  car?: string;
  className?: string;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    setError,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(askQuoteFormValidation),
    defaultValues: {
      car: car || "",
    },
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
      const response = await fetch("/api/get-quote", {
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

  return (
    <div
      className={cn(
        `
            absolute 
            right-0 
            top-[12.5%] 
            w-[250px] 
            mr-[50px] 
            rounded-lg 
            bg-[#F2F2F2]
            z-50

            max-sm:w-2/3

            max-img:top-[50vw]
            max-img:mr-0
            max-img:left-1/2
            max-img:-translate-x-1/2
            max-img:w-1/2
        `,
        className
      )}
    >
      <h2 className="text-lg font-semibold mb-2 bg-[#252728] text-white w-full text-center py-3">
        Solicitar Cotización
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 w-full relative p-5 text-[#252728]"
      >
        <FormField
          type="select"
          name="car"
          register={register}
          error={errors.car}
          placeholder="Vehículo"
          disable={Boolean(car)}
          color="secondary"
          options={options}
        />
        <FormField
          type="text"
          name="name"
          register={register}
          error={errors.name}
          placeholder="Nombre"
          color="secondary"
        />
        <FormField
          type="text"
          name="email"
          register={register}
          error={errors.email}
          placeholder="Correo Electrónico"
          color="secondary"
        />
        <FormField
          type="text"
          name="phoneNumber"
          register={register}
          error={errors.phoneNumber}
          placeholder="Teléfono"
          color="secondary"
        />

        <FormField
          type="textarea"
          name="message"
          placeholder="Mensaje"
          register={register}
          error={errors.message}
          color="secondary"
        />

        <Button
          disabled={isSubmitting}
          className={`
          w-full
          uppercase
          bg-[#252728]
          text-white
          py-2
          px-4
          rounded-md
          text-sm

          max-img:leading-[6.222222vw]
          max-img:text-[1.444444vw] 
        `}
          color="black"
          type="submit"
          loading={isSubmitting}
        >
          Solicitar Ahora
        </Button>

        {isSubmitSuccessful && (
          <div className="absolute top-0 left-0 h-full w-full text-center bg-white p-3">
            <div className="flex flex-col gap-4 items-center mt-4 justify-center h-[60%] animate-fade-in duration-150">
              <p className="text-lg font-bold">¡Gracias por tu solicitud!</p>
              <p className="text-sm">Nos pondremos en contacto contigo.</p>
              <Button
                className="w-[50%]"
                color="black"
                type="button"
                onClick={() => reset()}
              >
                Volver
              </Button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

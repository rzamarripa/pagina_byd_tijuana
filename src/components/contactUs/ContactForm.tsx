"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactFormValidation,
  mappedTopicOfInterestOptions,
  mappedContactMethodOptions,
} from "@/schemas";
import { FormField } from "../FormField";
import { Button } from "../PrimaryButton";

type FormData = {
  name: string;
  lastname: string;
  contactMethod: string;
  email: string;
  phoneNumber: string;
  region: string;
  postalCode: string;
  topicOfInterest: string;
  questions: string;
};

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    setError,
    watch,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(contactFormValidation),
  });

  const onSubmit = async (data: FormData) => {
    if (data.contactMethod === "Correo Electrónico" && !data.email) {
      setError("email", {
        type: "manual",
        message: "Por favor, introduce un Correo Electrónico",
      });
      return;
    }

    if (data.contactMethod === "Teléfono" && !data.phoneNumber) {
      setError("phoneNumber", {
        type: "manual",
        message: "Por favor, introduce un Número de Teléfono",
      });
    }

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

    if (data.postalCode && !/^\d{5}$/.test(data.postalCode)) {
      setError("postalCode", {
        type: "manual",
        message: "El código postal debe tener 5 dígitos",
      });
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
      const response = await fetch("/api/contact-us", {
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
    "flex justify-between gap-8 w-full max-img:flex-col max-img:gap-2";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2 w-full relative"
    >
      <div className={className}>
        <FormField
          type="text"
          name="name"
          register={register}
          error={errors.name}
          label="Nombre"
          required
        />
        <FormField
          type="text"
          name="lastname"
          register={register}
          error={errors.lastname}
          label="Apellidos"
          required
        />
      </div>

      <div className={className}>
        <FormField
          type="select"
          name="contactMethod"
          placeholder="Selecciona un método de contacto"
          register={register}
          error={errors.contactMethod}
          label="Método de contacto"
          options={mappedContactMethodOptions}
        />
        <FormField
          type="text"
          name="email"
          register={register}
          error={errors.email}
          label="Correo Electrónico"
          required={watch("contactMethod") === "Correo Electrónico"}
        />
        <FormField
          type="text"
          name="phoneNumber"
          register={register}
          error={errors.phoneNumber}
          label="Número de Teléfono"
          required={watch("contactMethod") === "Teléfono"}
        />
      </div>

      <div className={className}>
        <FormField
          type="text"
          name="postalCode"
          register={register}
          error={errors.postalCode}
          label="Código Postal"
        />
        <FormField
          type="select"
          name="topicOfInterest"
          placeholder="Selecciona un tema de interés"
          register={register}
          error={errors.topicOfInterest}
          label="Temas de Interés"
          options={mappedTopicOfInterestOptions}
        />
      </div>

      <FormField
        type="textarea"
        name="questions"
        register={register}
        error={errors.questions}
        label="Preguntas o dudas"
      />

      <Button
        disabled={isSubmitting}
        className={`
          w-[30%]
          uppercase

          max-img:w-[90%]
          max-img:h-[12.222222vw]
          max-img:leading-[12.222222vw]
          max-img:text-[4.444444vw] 
          max-img:mx-auto
          max-img:my-[11.666667vw]
        `}
        color="black"
        type="submit"
        loading={isSubmitting}
      >
        Enviar Mensaje
      </Button>

      {isSubmitSuccessful && (
        <div className="absolute h-full w-full bg-white">
          <div className="flex flex-col gap-4 items-center justify-center h-[60%] animate-fade-in duration-150">
            <p className="text-2xl font-bold">¡Gracias por tu mensaje!</p>
            <p className="text-lg">Nos pondremos en contacto contigo.</p>
            <Button
              className="w-[25%]"
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
  );
};

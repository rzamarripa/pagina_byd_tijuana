/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldError, UseFormRegister } from "react-hook-form";
import { cn } from "@/lib";

export type FormFieldProps =
  | {
      type: "select";
      placeholder?: string;
      name: string;
      register: UseFormRegister<any>;
      error: FieldError | undefined;
      valueAsNumber?: boolean;
      label?: string;
      options: string[];
      className?: string;
      required?: boolean;
      color?: "primary" | "secondary";
      disable?: boolean;
    }
  | {
      type: "text" | "email" | "number" | "password" | "textarea";
      placeholder?: string;
      name: string;
      register: UseFormRegister<any>;
      error: FieldError | undefined;
      valueAsNumber?: boolean;
      label?: string;
      options?: never;
      className?: string;
      required?: boolean;
      color?: "primary" | "secondary";
      disable?: boolean;
    };

export const FormField: React.FC<FormFieldProps> = ({
  type,
  placeholder = "",
  name,
  register,
  error,
  valueAsNumber,
  label = "",
  required = false,
  options,
  className,
  color = "primary",
  disable = false,
}) => {
  const primaryClasses = `
    w-full
    text-ellipsis
    border-b
    border-solid
    border-b-[#e3e3e4]
    indent-2.5
    text-black
    pr-[20%]
    focus:outline-none

    ${
      type === "textarea"
        ? `
        resize-none 
        border 
        border-solid 
        border-[#e3e3e4]
        leading-[1.6] 
        h-[200px] 
        p-1.5 

        max-img:text-[3.611111vw] 
        max-img:h-[58.333333vw] 
        max-img:w-full
      `
        : `
        h-[50px]

        max-img:h-[12.222222vw]
        max-img:text-[4.444444vw]
      `
    }
  `;
  const secondaryClasses = `
    rounded-sm 
    border 
    border-solid 
    border-[#e3e3e4] 
    bg-transparent 
    px-2.5
    text-sm 
    outline-0

    ${
      type === "textarea"
        ? `
        h-[80px]
        py-2.5
        min-h-[50px]
      `
        : `
        h-[40px]
        max-h-[30px]
      `
    }
  `;
  const classes = color === "primary" ? primaryClasses : secondaryClasses;

  return (
    <div
      className={`flex flex-col w-full relative pb-4 ${
        color === "secondary" ? "pb-2" : "max-img:pb-6"
      }`}
    >
      {label && (
        <label
          htmlFor={name}
          className={`
          mb-[0.78125vw]
          text-base
          font-semibold

          max-img:text-[4.444444vw]
          max-img:mt-[6.944444vw]
          max-img:mb-[3.194444vw]
        `}
        >
          {label}
          {required && <span>*</span>}
        </label>
      )}

      {type === "select" ? (
        <select
          id={name}
          {...register(name)}
          className={cn(classes, className, "[&>option]:text-black")}
          disabled={disable}
          defaultValue={""}
        >
          <option disabled value="">
            {`${placeholder}${required ? "*" : ""}`}
          </option>
          {options?.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          id={name}
          placeholder={`${placeholder}${required ? "*" : ""}`}
          {...register(name)}
          aria-invalid={error ? "true" : "false"}
          className={cn(classes, className)}
          disabled={disable}
        />
      ) : (
        <input
          type={type}
          id={name}
          placeholder={`${placeholder}${required ? "*" : ""}`}
          {...register(name, {
            valueAsNumber: type === "number" ? valueAsNumber : undefined,
          })}
          aria-invalid={error ? "true" : "false"}
          className={cn(classes, className)}
          disabled={disable}
        />
      )}

      {error && (
        <span
          className={`
            text-xs 
            text-red-500 
            absolute 
            bottom-0 
            whitespace-nowrap
            overflow-hidden
            text-ellipsis

            max-img:text-[3.311111vw]
            max-img:z-[1000]
          `}
        >
          {error.message}
        </span>
      )}
    </div>
  );
};

import { z } from 'zod';

const phoneRegex = /^[0-9]{10,15}$/;

export const askQuoteFormValidation = z.object({
    car: z.string().min(1, { message: "El nombre del coche es obligatorio" }),
    name: z.string().min(1, { message: "El nombre es obligatorio" }),
    email: z.string().min(1, { message: "El correo es obligatorio" })
        .email({ message: "El correo debe tener un formato válido" }),
    phoneNumber: z.string()
        .regex(phoneRegex, { message: "El número de teléfono debe tener entre 10 y 15 dígitos numéricos" }),
    message: z.string().optional()
});


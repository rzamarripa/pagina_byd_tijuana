import { z } from 'zod';

const contactMethodOptions = ["Teléfono", "Correo Electrónico"] as const;
export const mappedContactMethodOptions = ["Teléfono", "Correo Electrónico"];
const topicOfInterestOptions = ["Sobre la compra de autos", "Cooperación empresarial", "Sugerencias o Comentarios"] as const;
export const mappedTopicOfInterestOptions = ["Sobre la compra de autos", "Cooperación empresarial", "Sugerencias o Comentarios"];

export const contactFormValidation = z.object({
    name: z.string().min(1, "El nombre es obligatorio"),
    lastname: z.string().min(1, "El apellido es obligatorio"),
    contactMethod: z.enum(contactMethodOptions).refine(
        (val) => contactMethodOptions.includes(val),
        "Selecciona un medio de contacto válido"
    ),
    email: z.string().optional(),
    phoneNumber: z.string().optional(),
    postalCode: z.string().optional(),
    topicOfInterest: z.enum(topicOfInterestOptions).refine(
        (val) => topicOfInterestOptions.includes(val),
        "Selecciona un tema de interés válido"
    ),
    questions: z.string().optional()
});


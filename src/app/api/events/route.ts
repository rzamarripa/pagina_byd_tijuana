import { NextResponse, NextRequest } from 'next/server'
import nodemailer from 'nodemailer';

type FormData = {
    car: string;
    name: string;
    email: string;
    phoneNumber: string;
    message: string;
};

export async function POST(request: NextRequest) {
    const data: FormData = await request.json()
    const { car, name, email, phoneNumber, message } = data

    const user = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
    const pass = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
    console.log(user, pass)
    if (!user || !pass) {
        return NextResponse.json({ message: "missing credentials" }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
        host: "secure.emailsrvr.com",
        port: 465,
        secure: true,
        auth: {
            user,
            pass
        }
    });

    try {
        const mail = await transporter.sendMail({
            from: "atencionclientes@bydpremier.com.mx",
            to: "atencionclientes@bydpremier.com.mx",
            bcc: "masoft1314@gmail.com",
            subject: `Solicito Cotización de ${car}`,
            html: `
            <p><strong>Carro:</strong> ${car} </p>
            <p><strong>Nombre:</strong> ${name} </p>
            <p><strong>Correo:</strong> ${email} </p>
            <p><strong>Telefono:</strong> ${phoneNumber} </p>
            <p><strong>Mensaje</strong> ${message} </p>
            `,
        })

        return NextResponse.json({ message: "Success: email was sent", mail })

    } catch (error) {
        console.log(error)
        NextResponse.json({ message: "email was not sent" }, { status: 400 })
    }
}
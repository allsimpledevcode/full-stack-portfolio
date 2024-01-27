import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const SEND_EMAIL = 'contact.simpledevcode@gmail.com';

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: SEND_EMAIL,
    pass: "gyuy nqig mhdg pkth",
  },
});

export async function POST(request: Request) {
  const data = await request.json();
  const info = await transporter.sendMail({
    from: data.email, // sender address
    to: SEND_EMAIL, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: `<b>Name: ${data?.fullName}</b><br/><b>Name: ${data?.email}</b><br/><b>Budget: ${data?.budget}</b><br/><b>Description: ${data?.description}</b><b>Contact No: ${data?.number}</b>`, // html body
  });
  
  return NextResponse.json({
    messageId: info.messageId
  })
}

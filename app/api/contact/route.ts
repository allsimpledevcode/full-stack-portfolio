import { NextResponse } from "next/server";
import nodemailer from "nodemailer";


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: process.env.SEND_EMAIL,
    pass: process.env.PASS,
  },
});

export async function POST(request: Request) {
  const data = await request.json();
  const info = await transporter.sendMail({
    from: data.email, // sender address
    to: process.env.SEND_EMAIL, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: `<b>Name: ${data?.fullName}</b><br/><b>Name: ${data?.email}</b><br/><b>Budget: ${data?.budget}</b><br/><b>Description: ${data?.description}</b><b>Contact No: ${data?.number}</b>`, // html body
  });
  
  return NextResponse.json({
    messageId: info.messageId
  })
}

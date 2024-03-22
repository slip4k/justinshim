import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const email = process.env.NEXT_EMAIL;
  const pass = process.env.NEXT_EMAIL_PASS;

  console.log(req.body);
  const { formName, formEmail, formSubject, formMessage } = await req.json();
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: email,
      pass,
    },
  });

  const mailOptions = {
    from: `${formName}: ${formEmail} Website Msg`,
    to: 'justinjaeshim@gmail.com',
    subject: `${formSubject}`,
    html: `${formMessage}`,
  };

  await transporter.sendMail(mailOptions);

  return NextResponse.json({ message: 'email sent' }, { status: 200 });
}

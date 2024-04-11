import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const authEmail = process.env.NEXT_EMAIL;
  const pass = process.env.NEXT_EMAIL_PASS;

  const { name, email, message, phone } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: authEmail,
      pass,
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`, // Formatted sender information
    to: 'justinjaeshim@gmail.com', // Your email address
    subject: 'Website Enquiry',
    html: `
      <h4>Message from: ${name}</h4>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Message:</p>
      <p>${message}</p>
    `, // HTML body
  };

  try {
    await transporter.sendMail(mailOptions);
    return new NextResponse(
      JSON.stringify({ message: 'Email sent successfully' }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Failed to send email', error);
    return new NextResponse(
      JSON.stringify({ message: 'Failed to send email' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}

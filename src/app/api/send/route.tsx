import sg from "@sendgrid/mail";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  sg.setApiKey(process.env.SENDGRID_API_KEY!);
  const to_e = process.env.TO_EMAIL;
  const from_e = process.env.FROM_EMAIL!;
  
  try {
    console.log("Sending email...");
    const data = await req.json();
    const { name, email, msg } = data;
    
    console.log(name, email, msg);
    await sg.send({
      to: to_e,
      from: from_e,
      subject: `${name} has sent a message from your site!`,
      html: `<h4> ${name} has sent a message, their email is ${email}.</h4> 
      <br> Message: ${msg}`,
    });
    return NextResponse.json({ message: "Email sent", success: true});
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: err, success: false});
  };

};
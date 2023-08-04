import sg from "@sendgrid/mail";

export async function POST(req: Request, res: Response) {
  sg.setApiKey(process.env.SENDGRID_API_KEY!);
  const to_e = process.env.TO_EMAIL;
  const from_e = process.env.FROM_EMAIL!;
  
  try {
    console.log("Sending email...");
    const data = await req.json();
    const { name, email, msg } = data;
    
    console.log(name, email, msg, to_e, from_e);
    await sg.send({
      to: to_e,
      from: from_e,
      subject: `${name} has sent a message from your site!`,
      html: `<h4> ${name} has sent a message, their email is ${email}.</h4> 
      <br> Message: ${msg}`,
    });
  } catch (err) {
    console.log("Failed");
    console.log(err);
  };

};
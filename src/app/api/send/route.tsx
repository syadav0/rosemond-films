import sg from "@sendgrid/mail";

export async function POST(req: any, res: any) {
  
  const api_key: any = process.env.SENDGRID_API_KEY; 
  sg.setApiKey(api_key);

  const to_e = process.env.TO_EMAIL;
  const from_e = process.env.FROM_EMAIL;   

  const mailMsg: any = {
    to: to_e, 
    from: from_e,
    subject: "New mail from your site!",
    text: "messages",
    html: `<h2>${req.body.name} has sent a message, their email is ${req.body.email}</h2>. 
        <br><br> ${req.body.msg}`,
  };
  try {
    console.log("Sending email...");
    await sg.send(mailMsg);
  } catch (err) {
    console.log("Failed");
    console.log(err);
  }
}

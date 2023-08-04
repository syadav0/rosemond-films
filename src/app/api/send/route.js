import sg from "@sendgrid/mail";

export async function POST(req, res) {
  sg.setApiKey(process.env.SENDGRID_API_KEY);
  const to_e = process.env.TO_EMAIL;
  const from_e = process.env.FROM_EMAIL;

  const b = await req.json();
  try {
    console.log("Sending email...");
    console.log(b.name, b.email, b.msg);
    await sg.send({
      to: to_e,
      from: from_e,
      subject: `${b.name} has sent a message from your site!`,
      html: `<h4> ${b.name} has sent a message, their email is ${b.email}.</h4> 
      <br> Message: ${b.msg}`,
    });
  } catch (err) {
    console.log("Failed");
    console.log(err);
  };

};
import * as nodemailer from "nodemailer";

export default function sendEmail(req, res){

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth:{
      user: process.env.USERMAIL,
      pass: process.env.PASSMAIL
    }
  })

  transporter.sendMail({
    from: 'req.body.email',
    to: process.env.USERMAIL,
    replyTo: req.body.email,
    subject: "CONTACT | PORTFOLIO RAFAEL NOGALHA", 
    text: req.body.message
  }).then((response)=> { res.send(response) })
    .catch((error) => { res.send(error) })
}
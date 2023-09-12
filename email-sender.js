
import nodemailer from "nodemailer"

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'byteman@gmail.com',
    pass: 'olusey899'
  }
});

var mailOptions = {
  from: 'byteman@gmail.com',
  to: 'webmi@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 
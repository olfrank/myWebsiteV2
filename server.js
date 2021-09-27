
// const express = require("express");
// const router = express.Router();
// const cors = require("cors");
// const nodemailer = require("nodemailer");
// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use("/", router);
// app.listen(5000, () => console.log("Server Running"));

// const contactEmail = nodemailer.createTransport({
//     service: 'hotmail',
//     auth: {
//       user: "olliefrancis97@hotmail.co.uk",
//       pass: "",
//     },
//   });
  
//   contactEmail.verify((error) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Ready to Send");
//     }
//   });

//   router.post("/contact", (req, res) => {
//     const name = req.body.name;
//     const email = req.body.email;
//     const message = req.body.message; 
//     const subject = req.body.subject;
//     const mail = {
//       from: name,
//       to: "olliefrancis97@hotmail.co.uk",
//       subject: subject,
//       html: `<p>Name: ${name}</p>
//              <p>Email: ${email}</p>
//              <p>Subject: ${subject}</p>
//              <p>Message: ${message}</p>`,
//     };
//     contactEmail.sendMail(mail, (error) => {
//       if (error) {
//         res.json({ status: "ERROR" });
//       } else {
//         res.json({ status: "Message Sent" });
//       }
//     });
//   });
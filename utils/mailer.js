const nodemailer = require("nodemailer");

class Mailer{
async transferEmail({fullName, subject, email, message}){
    //transfer protocoal
    let transporter =  nodemailer.createTransport({
        host: "smtp.gmail.com", 
        port:587, 
        secure: false, 
        auth:{ user:process.env.USERNAME, pass:process.env.PASSWORD}, 
        tls:{
            rejectUnauthorized: false
        }
    });

    //contents of email
    let mailOptions = {
        from: '"Anupam Website" <website@anupam.com>',
        to: `anupam.stha@gmail.com`,
        subject: "Email from Website",
        text: "New Contact",
        html:
        "<h2>First Name: </h2>"+fullName+
        "<br><h2>Email: </h2>"+email+
        "<br><h2>Subject: </h2>"+subject+
        "<br><h2>Message: </h2>"+message
    };
    let info =  await transporter.sendMail(mailOptions);
    return info;

}
}

module.exports = new Mailer();
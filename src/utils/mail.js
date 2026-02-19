import Mailgen from "mailgen";
import nodemailer from "nodemailer";

const sendEmail = async () => {
  const mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Task Manager",
      link: "https://taskmanagerlink.com",
    },
  });

  const emailTextual = mailGenerator.generatePlaintext(options.mailgenContent);
  const emailHtml = mailGenerator.generate(options.mailgenContent);

  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_TRAP_SMTP_HOST,
    port: process.env.MAIL_TRAP_SMTP_PORT,
    auth: {
      user: process.env.MAIL_TRAP_SMTP_USER,
      pass: process.env.MAIL_TRAP_SMTP_PASS,
    },
  });

  const mail = {
    from: "mail.taskmanager@example.com",
    to: options.email,
    subject: options.subject,
    text: emailTextual,
    html: emailHtml,
  };

  try {
    await transporter.sendMail(mail);
  } catch (error) {
    console.error(
      "Email service failed. Make sure habve provided your mailtrap creds in .env file",
    );
    console.error("Error: ", error);
  }
};

const verificationEmailContent = (username, verificationUrl) => {
  return {
    body: {
      name: username,
      intro: "Welcome to the App!",
      action: {
        instructions:
          "To Verify your email please click on the following button",
        button: {
          color: "#22BB66",
          text: "Verify Your Email",
          link: verificationUrl,
        },
      },
      outro: "Need help, or have questions? Just reply to this email",
    },
  };
};

const forgotPasswordEmailContent = (username, passwordResetUrl) => {
  return {
    body: {
      name: username,
      intro: "We got a request to reset your password",
      action: {
        instructions:
          "To reset your password please click on the following button or link",
        button: {
          color: "#288ccf",
          text: "Reset Password",
          link: passwordResetUrl,
        },
      },
      outro: "Need help, or have questions? Just reply to this email",
    },
  };
};

export { verificationEmailContent, forgotPasswordEmailContent, sendEmail };

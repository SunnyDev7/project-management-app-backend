import Mailgen from "mailgen";

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

export { verificationEmailContent, forgotPasswordEmailContent };

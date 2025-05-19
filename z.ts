import { VERIFY_EMAIL_TEMPLATE } from "../emailTemplates/registrationOtpEmail";

import jwt from "jsonwebtoken";
import { sendEmail } from "./mail";

export const generateAndSendOtp = async (
  email: string,
  name: string,
  phone: string
) => {
  const OTP = Math.floor(100000 + Math.random() * 900000);
  let msg = encodeURI(
    `LEDAK - ${OTP} is your one time password. Do not share your OTP with anyone.
OTPSWB`
  );

  const smsResponse = await fetch(
    `http://bulksms.promotionkart.com/api/SmsApi/SendSingleUnicodeApi?UserID=${process
      .env.SMS_USER_ID!}&Password=${process.env.SMS_PASSWORD}&SenderID=${
      process.env.SENDER_ID
    }&Phno=${phone}&Msg=${msg}&EntityID=${process.env.ENTITY_ID}&TemplateID=${
      process.env.TEMPLATE_ID
    }`
  );
  const res = await smsResponse.json();
  const token = jwt.sign({ email, OTP }, process.env.JWT_KEY!, {
    expiresIn: "600s",
  });
  const html = VERIFY_EMAIL_TEMPLATE(name, OTP);

  sendEmail({ to: email, subject: "Email verification", html });

  return { token, OTP };
};

// 4205

import crypto from "crypto";
import "dotenv/config";

export const encrypt = (message: string, type: string): string => {
  let key;
  let iv;

  if (type === "MRN") {
    key = Buffer.from(process.env.MRN_SECRET_KEY!, "hex");
    iv = Buffer.from(process.env.MRN_IV!, "hex");
  } else {
    key = Buffer.from(process.env.MESSAGE_SECRET_KEY!, "hex");
    iv = Buffer.from(process.env.MESSAGE_IV!, "hex");
  }

  const cipher = crypto.createCipheriv(process.env.ALGORITHM!, key, iv);
  let encryptedData = cipher.update(message, "utf-8", "hex");
  encryptedData += cipher.final("hex");
  return encryptedData;
};

export const decrypt = (encryptedData: string, type: string): string => {
  let key;
  let iv;

  if (type === "MRN") {
    key = Buffer.from(process.env.MRN_SECRET_KEY!, "hex");
    iv = Buffer.from(process.env.MRN_IV!, "hex");
  } else {
    key = Buffer.from(process.env.MESSAGE_SECRET_KEY!, "hex");
    iv = Buffer.from(process.env.MESSAGE_IV!, "hex");
  }

  const decipher = crypto.createDecipheriv(process.env.ALGORITHM!, key, iv);
  let decryptedData = decipher.update(encryptedData, "hex", "utf-8");
  decryptedData += decipher.final("utf8");
  return decryptedData;
};

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypt = exports.encrypt = void 0;
const crypto_1 = __importDefault(require("crypto"));
require("dotenv/config");
const encrypt = (message, type) => {
    let key;
    let iv;
    if (type === "MRN") {
        key = Buffer.from(process.env.MRN_SECRET_KEY, "hex");
        iv = Buffer.from(process.env.MRN_IV, "hex");
    }
    else {
        key = Buffer.from(process.env.MESSAGE_SECRET_KEY, "hex");
        iv = Buffer.from(process.env.MESSAGE_IV, "hex");
    }
    const cipher = crypto_1.default.createCipheriv(process.env.ALGORITHM, key, iv);
    let encryptedData = cipher.update(message, "utf-8", "hex");
    encryptedData += cipher.final("hex");
    return encryptedData;
};
exports.encrypt = encrypt;
const decrypt = (encryptedData, type) => {
    let key;
    let iv;
    if (type === "MRN") {
        key = Buffer.from(process.env.MRN_SECRET_KEY, "hex");
        iv = Buffer.from(process.env.MRN_IV, "hex");
    }
    else {
        key = Buffer.from(process.env.MESSAGE_SECRET_KEY, "hex");
        iv = Buffer.from(process.env.MESSAGE_IV, "hex");
    }
    const decipher = crypto_1.default.createDecipheriv(process.env.ALGORITHM, key, iv);
    let decryptedData = decipher.update(encryptedData, "hex", "utf-8");
    decryptedData += decipher.final("utf8");
    return decryptedData;
};
exports.decrypt = decrypt;
//# sourceMappingURL=crypto.js.map
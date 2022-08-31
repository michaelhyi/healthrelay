"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypt = exports.encrypt = void 0;
const crypto_1 = __importDefault(require("crypto"));
require("dotenv/config");
const encrypt = (text, type) => {
    const iv = crypto_1.default.randomBytes(16);
    const cipher = crypto_1.default.createCipheriv(process.env.ALGORITHM, type === "mrn"
        ? process.env.MRN_SECRET_KEY
        : process.env.MESSAGE_SECRET_KEY, iv);
    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
    return {
        iv: iv.toString("hex"),
        content: encrypted.toString("hex"),
    };
};
exports.encrypt = encrypt;
const decrypt = (hash, type) => {
    const decipher = crypto_1.default.createDecipheriv(process.env.ALGORITHM, type === "mrn"
        ? process.env.MRN_SECRET_KEY
        : process.env.MESSAGE_SECRET_KEY, Buffer.from(hash.iv, "hex"));
    const decrpyted = Buffer.concat([
        decipher.update(Buffer.from(hash.content, "hex")),
        decipher.final(),
    ]);
    return decrpyted.toString();
};
exports.decrypt = decrypt;
//# sourceMappingURL=mrn.js.map
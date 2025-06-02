const crypto = require("crypto");
let password = "miSuperSecreto";
let hashedPassword = crypto.createHash("sha256").update(password).digest("hex");
console.log(password)
console.log(hashedPassword);
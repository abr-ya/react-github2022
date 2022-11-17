const fs = require("fs");
// здесь необходимо перечислить ключи из файла ENV, а точнее - из ENV netlify
const ENV = `
  API_URL=${process.env.API_URL}\n
  API_KEY=${process.env.API_KEY}\n
  TEST=${process.env.TEST}\n
`;
console.log("Prepare ENV for Netlify: ", ENV);

fs.writeFileSync("./.env", ENV);

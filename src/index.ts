import "dotenv/config";

console.log("Configuração da Vercel:");

console.log(
  "VERCEL_TOKEN:",
  process.env.VERCEL_TOKEN ? "OK" : "NÃO ENCONTRADO",
);
console.log(
  "VERCEL_TEAM_ID:",
  process.env.VERCEL_TEAM_ID ? "OK" : "NÃO ENCONTRADO",
);
console.log(
  "VERCEL_PROJECT_ID:",
  process.env.VERCEL_PROJECT_ID ? "OK" : "NÃO ENCONTRADO",
);

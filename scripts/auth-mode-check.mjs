import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const failures = [];
const read = (relativePath) => fs.readFileSync(path.join(ROOT, relativePath), "utf8");

const auth = read("src/lib/auth.ts");
const googleButton = read("src/components/auth/google-sign-in-button.tsx");
const facebookButton = read("src/components/auth/facebook-sign-in-button.tsx");
const signInPage = read("src/app/entrar/page.tsx");
const home = read("src/app/page.tsx");

function requireText(source, text, message) {
  if (!source.includes(text)) failures.push(message);
}

requireText(auth, "disableImplicitSignUp: true", "OAuth social deve bloquear cadastro implícito no fluxo Entrar.");
requireText(googleButton, "requestSignUp", "Botão Google precisa suportar solicitação explícita de cadastro.");
requireText(facebookButton, "requestSignUp", "Botão Facebook precisa suportar solicitação explícita de cadastro.");
requireText(signInPage, 'modo === "registrar"', "Página de acesso precisa distinguir Registrar-se de Entrar.");
requireText(signInPage, "requestSignUp={isRegister}", "Página de acesso precisa autorizar cadastro apenas no modo Registrar-se.");
requireText(home, 'href="/entrar?modo=entrar&voltar=/"', "Home pública precisa oferecer Entrar explicitamente.");
requireText(home, 'href="/entrar?modo=registrar&voltar=/"', "Home pública precisa oferecer Registrar-se explicitamente.");

if (home.includes("Entre. Escolha o canal. Crie.")) {
  failures.push("Slogan antigo não pode voltar para a Home pública.");
}

if (failures.length) {
  console.error("\nFalhas no fluxo Entrar/Registrar-se:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("Acesso OK: Entrar e Registrar-se são fluxos distintos e o cadastro social exige solicitação explícita.");

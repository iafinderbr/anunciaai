import type { Metadata } from "next";
import Link from "next/link";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { FacebookSignInButton } from "@/components/auth/facebook-sign-in-button";
import { GoogleSignInButton } from "@/components/auth/google-sign-in-button";
import { auth } from "@/lib/auth";
import { SITE_URL } from "@/lib/site";

const PATH = "/entrar";
const TITLE = "Entrar ou criar conta";
const DESCRIPTION = "Acesse o AnunciaAI com Google para usar os geradores e organizar os dados que decidir salvar.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}${PATH}` },
  robots: { index: false, follow: false },
};

function safeCallbackURL(value?: string) {
  if (!value || !value.startsWith("/") || value.startsWith("//")) return "/";

  try {
    const base = new URL(SITE_URL);
    const target = new URL(value, base);
    if (target.origin !== base.origin) return "/";
    return `${target.pathname}${target.search}${target.hash}`;
  } catch {
    return "/";
  }
}

function socialErrorMessage(error: string | undefined, isRegister: boolean) {
  if (error === "google") {
    return isRegister
      ? "O Google não conseguiu concluir o cadastro. Escolha uma conta e tente novamente."
      : "Não foi possível entrar com essa conta Google. Se ela ainda não estiver cadastrada, use Registrar-se.";
  }
  if (error === "facebook") {
    return isRegister
      ? "O Facebook não conseguiu concluir o cadastro. Tente novamente ou use o Google."
      : "Não foi possível entrar com essa conta Facebook. Se ela ainda não estiver cadastrada, use Registrar-se.";
  }
  return null;
}

function Wordmark() {
  return (
    <Link href="/" className="inline-flex items-center gap-3" aria-label="AnunciaAI, página inicial">
      <span aria-hidden="true" className="h-7 w-[3px] bg-brand-500" />
      <span className="text-[20px] font-semibold tracking-[-0.05em] text-white">
        Anuncia<span className="text-brand-300">AI</span>
      </span>
    </Link>
  );
}

export default async function SignInPage({
  searchParams,
}: {
  searchParams: Promise<{ voltar?: string; erro?: string; modo?: string }>;
}) {
  const session = await auth.api.getSession({ headers: await headers() });
  const { voltar, erro, modo } = await searchParams;
  const callbackURL = safeCallbackURL(voltar);
  const mode = modo === "registrar" ? "registrar" : "entrar";
  const isRegister = mode === "registrar";
  const errorMessage = socialErrorMessage(erro, isRegister);
  const facebookEnabled = Boolean(process.env.FACEBOOK_CLIENT_ID && process.env.FACEBOOK_CLIENT_SECRET);

  if (session) redirect(callbackURL);

  const encodedReturn = encodeURIComponent(callbackURL);
  const googleErrorURL = `/entrar?modo=${mode}&erro=google&voltar=${encodedReturn}`;
  const facebookErrorURL = `/entrar?modo=${mode}&erro=facebook&voltar=${encodedReturn}`;

  return (
    <main className="min-h-screen bg-[#10110f] text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-[1480px] flex-col px-5 sm:px-8 lg:px-12">
        <header className="flex h-[76px] items-center justify-between border-b border-white/[0.07]">
          <Wordmark />
          <Link href="/" className="text-[12px] font-medium text-white/42 transition-colors hover:text-white">
            Voltar ao início
          </Link>
        </header>

        <section className="flex flex-1 items-center justify-center py-10 sm:py-14">
          <div className="grid w-full max-w-[1120px] overflow-hidden border border-white/[0.10] bg-[#131411] lg:grid-cols-[minmax(0,0.92fr)_minmax(360px,0.68fr)]">
            <div className="hidden min-h-[570px] border-r border-white/[0.08] bg-[#ece9e1] p-10 text-[#171714] lg:flex lg:flex-col lg:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#171714]/48">AnunciaAI</p>
                <h2 className="mt-7 max-w-md text-[3.4rem] font-semibold leading-[0.95] tracking-[-0.06em]">
                  Seu produto merece começar organizado.
                </h2>
              </div>

              <div className="border-t border-[#171714]/12 pt-7">
                <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
                  {["Informe o produto", "Escolha o destino", "Revise antes de usar"].map((item, index) => (
                    <div key={item} className="flex items-center gap-4">
                      <span className="text-[10px] font-semibold tabular-nums text-[#171714]/35">0{index + 1}</span>
                      <span className="text-[13px] font-semibold text-[#171714]/72">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex min-h-[540px] items-center p-6 sm:p-10 lg:p-12">
              <div className="mx-auto w-full max-w-sm">
                <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-brand-300">
                  {isRegister ? "Criar conta" : "Acessar conta"}
                </p>
                <h1 className="mt-4 text-[2.45rem] font-semibold leading-[1] tracking-[-0.055em] text-white sm:text-[2.8rem]">
                  {isRegister ? "Crie sua conta gratuita." : "Bem-vindo de volta."}
                </h1>
                <p className="mt-4 text-sm leading-6 text-white/44">
                  {isRegister
                    ? "Use Google pessoal ou Google Workspace. Você começa no modo Grátis e não precisa informar cartão."
                    : "Entre com a conta Google que você já usa no AnunciaAI para continuar de onde parou."}
                </p>

                {errorMessage ? (
                  <div role="alert" className="mt-5 border border-rose-400/25 bg-rose-400/[0.05] px-4 py-3 text-xs leading-5 text-rose-100">
                    {errorMessage}
                  </div>
                ) : null}

                <div className="mt-7 grid gap-3 [&_button]:rounded-none [&_button]:shadow-none">
                  <GoogleSignInButton
                    callbackURL={callbackURL}
                    label={isRegister ? "Registrar-se com Google" : "Entrar com Google"}
                    errorCallbackURL={googleErrorURL}
                    requestSignUp={isRegister}
                  />
                  {facebookEnabled ? (
                    <FacebookSignInButton
                      callbackURL={callbackURL}
                      label={isRegister ? "Registrar-se com Facebook" : "Entrar com Facebook"}
                      errorCallbackURL={facebookErrorURL}
                      requestSignUp={isRegister}
                    />
                  ) : null}
                </div>

                <div className="mt-6 border-t border-white/[0.08] pt-5 text-center">
                  <p className="text-xs text-white/36">
                    {isRegister ? "Já tem uma conta?" : "Ainda não tem conta?"}{" "}
                    <Link
                      href={`/entrar?modo=${isRegister ? "entrar" : "registrar"}&voltar=${encodedReturn}`}
                      className="font-semibold text-white transition-colors hover:text-brand-300"
                    >
                      {isRegister ? "Entrar" : "Registrar-se"}
                    </Link>
                  </p>
                </div>

                <p className="mt-6 text-[11px] leading-5 text-white/28">
                  O AnunciaAI não recebe sua senha do Google. Ao continuar, você concorda com nossos{" "}
                  <Link href="/termos" className="text-white/48 hover:text-white">Termos</Link> e{" "}
                  <Link href="/privacidade" className="text-white/48 hover:text-white">Privacidade</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

import { ImageResponse } from "next/og";

export const alt = "AnunciaAI — crie anúncios de produtos com a ferramenta";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          color: "#171717",
          padding: "72px 82px",
          border: "1px solid #ececec",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 18,
              background: "#171717",
              color: "#ffffff",
              fontSize: 38,
              fontWeight: 800,
            }}
          >
            A
          </div>
          <div style={{ display: "flex", fontSize: 38, fontWeight: 750, letterSpacing: "-0.04em" }}>
            Anuncia<span style={{ color: "#ff5c1a" }}>AI</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 940 }}>
          <div style={{ fontSize: 68, lineHeight: 1.04, fontWeight: 800, letterSpacing: "-0.05em" }}>
            Transforme informações do produto em um anúncio mais claro.
          </div>
          <div style={{ marginTop: 28, fontSize: 28, lineHeight: 1.35, color: "#666666" }}>
            Organize títulos, descrições, benefícios e conteúdo para revisar antes de publicar.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 20 }}>
          <div style={{ color: "#ff5c1a", fontWeight: 700 }}>Ferramentas gratuitas para quem vende online</div>
          <div style={{ color: "#777777" }}>anunciaai.vercel.app</div>
        </div>
      </div>
    ),
    size,
  );
}

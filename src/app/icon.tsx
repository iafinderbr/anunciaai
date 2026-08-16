import { ImageResponse } from "next/og";

export const size = {
  width: 48,
  height: 48,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 12,
          background: "#171717",
          color: "#ffffff",
          fontSize: 30,
          fontWeight: 800,
          letterSpacing: "-0.06em",
        }}
      >
        A
      </div>
    ),
    size,
  );
}

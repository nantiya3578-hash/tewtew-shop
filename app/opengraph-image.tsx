import { ImageResponse } from "next/og";

export const alt = "TewTewShop";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            left: -120,
            width: 420,
            height: 420,
            borderRadius: 9999,
            background: "#fdeef4",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -140,
            right: -100,
            width: 460,
            height: 460,
            borderRadius: 9999,
            background: "#eaf6fd",
          }}
        />
        <div style={{ display: "flex", gap: 16, marginBottom: 32 }}>
          <div style={{ width: 28, height: 28, borderRadius: 9999, background: "#f7a8c4" }} />
          <div style={{ width: 28, height: 28, borderRadius: 9999, background: "#8fd0f2" }} />
          <div style={{ width: 28, height: 28, borderRadius: 9999, background: "#7ccfa4" }} />
        </div>
        <div style={{ fontSize: 120, fontWeight: 700, color: "#111111", letterSpacing: -2 }}>
          TewTewShop
        </div>
        <div style={{ fontSize: 40, color: "#6b6b6b", marginTop: 16 }}>
          Quality branded fashion · Great prices
        </div>
      </div>
    ),
    size,
  );
}

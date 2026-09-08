import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${profile.name} — ${profile.role}`;

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #0b0b0d 0%, #131316 100%)",
          color: "#f4f4f5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, color: "#4f83f7", marginBottom: 24 }}>
          {profile.role.toUpperCase()}
        </div>
        <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.05 }}>
          {profile.name}
        </div>
        <div style={{ fontSize: 34, color: "#a1a1aa", marginTop: 24 }}>
          Web Development · Information Security · IT Assessment · IT Governance
        </div>
        <div style={{ fontSize: 26, color: "#71717a", marginTop: 48 }}>
          {profile.website}
        </div>
      </div>
    ),
    size,
  );
}

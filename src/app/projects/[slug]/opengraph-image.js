import { ImageResponse } from "next/og";
import { getProjectBySlug } from "@/data/projects";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

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
          {project ? project.category.toUpperCase() : "PROJECT"}
        </div>
        <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.1 }}>
          {project ? project.title : "Refdinal — Projects"}
        </div>
        <div style={{ fontSize: 30, color: "#a1a1aa", marginTop: 24 }}>
          {project ? project.summary : "Web Development · Information Security · Data Analysis"}
        </div>
      </div>
    ),
    size,
  );
}

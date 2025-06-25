import { NextRequest, NextResponse } from "next/server";
import { getLinkPreview } from "link-preview-js";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");

  if (!url || typeof url !== "string") {
    return NextResponse.json(
      { error: "Invalid or missing URL" },
      { status: 400 }
    );
  }

  try {
    const preview = await getLinkPreview(url);

    // Type guard to check if expected fields exist
    const isLinkPreview = (
      data: unknown
    ): data is {
      title?: string;
      description?: string;
      images?: string[];
      url?: string;
    } =>
      typeof data === "object" &&
      data !== null &&
      ("title" in data || "description" in data || "images" in data);

    if (isLinkPreview(preview)) {
      return NextResponse.json({
        title: preview.title || "",
        description: preview.description || "",
        image: Array.isArray(preview.images) ? preview.images[0] || "" : "",
        url: preview.url || url,
      });
    }

    return NextResponse.json(
      { error: "No preview metadata found" },
      { status: 404 }
    );
  } catch (error) {
    const err = error as Error;
    console.error("Preview API Error:", err.message);
    return NextResponse.json(
      { error: "Failed to fetch preview" },
      { status: 500 }
    );
  }
}

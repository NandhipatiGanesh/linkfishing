"use client";
import { useState } from "react";
import AiInput from "../components/ui/ai-input";
import LinkPreview from "./LinkPreview";



export default function LinkPreviewContainer() {
  const [link, setLink] = useState("");

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <AiInput onSubmitLink={(url: string) => setLink(url)} />
      {link && <LinkPreview url={link} />}
    </div>
  );
}

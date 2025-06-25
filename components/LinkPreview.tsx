"use client";

import { useEffect, useState } from "react";
import Image from "next/image"; // ✅ Fix for <img> warning

interface PreviewData {
  title: string;
  description: string;
  image: string;
  url: string;
}

export default function LinkPreview({ url }: { url: string }) {
  const [preview, setPreview] = useState<PreviewData | null>(null); // ✅ Replaced `any`
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!url) return;

    const fetchPreview = async () => {
      try {
        const res = await fetch(`/api/preview?url=${encodeURIComponent(url)}`);
        const data = await res.json();
        setPreview(data);
        setError(false);
      } catch {
        setError(true); // ✅ Removed unused `err`
      }
    };

    fetchPreview();
  }, [url]);

  if (error) return <p className="text-red-500">Failed to fetch preview.</p>;
  if (!preview) return <p className="text-gray-500">Loading preview...</p>;

  return (
    <div className="border rounded-lg p-4 mt-4 max-w-xl mx-auto">
      {preview.image && (
        <Image
          src={preview.image}
          alt={preview.title}
          width={600}
          height={160}
          className="rounded mb-2 w-full h-40 object-cover"
        />
      )}
      <h2 className="text-lg font-bold">{preview.title}</h2>
      <p className="text-sm text-gray-600">{preview.description}</p>
      <a
        href={preview.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 text-sm block mt-2"
      >
        {preview.url}
      </a>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import AiInput from "@/components/ui/ai-input";
import Faqs from "@/components/faq/faq";


interface PreviewData {
  title: string;
  description: string;
  image: string;
  url: string;
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [link, setLink] = useState("");
  const [previewData, setPreviewData] = useState<PreviewData | null>(null);
  const [error, setError] = useState("");

  const handleSubmitLink = (url: string) => {
    setLink(url);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setLink(""); // Optional: clear the link after closing
  };
  useEffect(() => {
    if (!link) return;

    const fetchPreview = async (url: string) => {
      try {
        console.log("Fetching preview for:", url); // 👈 log this
        const res = await fetch(`/api/preview?url=${encodeURIComponent(url)}`);
        if (!res.ok) throw new Error("Fetch failed");
        const data = await res.json();
        setPreviewData(data);
        setError("");
      } catch (err) {
        console.error("Client Error:", err); // 👈 also log this
        setError("Failed to fetch preview");
      }
    };

    fetchPreview(link);
  }, [link]);

  return (
    <>
      <section className="flex flex-col items-center h-screen justify-center">
        <div className="w-full">
          <AiInput onSubmitLink={handleSubmitLink} />
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-white backdrop-blur-sm flex items-center justify-center z-50">
          <div className=" mx-auto max-w-lg w-full bg-white shadow p-1 rounded-[22px]">
            <div className=" dark:bg-neutral-900 p-6  max-w-lg w-full relative !bg-black/5 !border rounded-[22px] !border-black/5">
              <button
                onClick={closeModal}
                className="absolute cursor-pointer top-2 right-3 text-xl text-gray-500 hover:text-black dark:hover:text-white"
              >
                &times;
              </button>
              {error ? (
                <p className="text-red-500">{error}</p>
              ) : previewData ? (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">{previewData.title}</h2>
                  <p className="text-sm text-gray-600">
                    {previewData.description}
                  </p>
                  {previewData.image && (
                    <img
                      src={previewData.image}
                      alt="Preview"
                      className="rounded-lg"
                    />
                  )}
                  <a
                    href={previewData.url}
                    target="_blank"
                    className="text-white  px-6 py-2 border border-2-[#dedede] rounded-full bg-black"
                  >
                    Visit
                  </a>
                </div>
              ) : (
                <p className="text-gray-500">Loading preview...</p>
              )}
            </div>
          </div>
        </div>
      )}

      <Faqs />
    </>
  );
}

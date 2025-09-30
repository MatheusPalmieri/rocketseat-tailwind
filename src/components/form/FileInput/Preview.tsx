"use client";

import { User } from "lucide-react";
import { useMemo } from "react";
import { useFileInput } from "./Root";

export const Preview = () => {
  const { files } = useFileInput();

  const previewUrl = useMemo(() => {
    if (files.length === 0) {
      return null;
    }

    return URL.createObjectURL(files[0]);
  }, [files]);

  if (previewUrl) {
    return (
      <img
        src={previewUrl}
        alt="Preview"
        className="size-16 rounded-full object-cover"
      />
    );
  }

  return (
    <div className="flex size-16 items-center justify-center rounded-full bg-violet-50">
      <User className="size-8 text-violet-600" />
    </div>
  );
};

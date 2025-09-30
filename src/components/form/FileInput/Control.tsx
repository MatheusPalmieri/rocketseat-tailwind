"use client";

import type { ChangeEvent, ComponentProps } from "react";
import { useFileInput } from "./Root";

type ControlProps = ComponentProps<"input">;

export const Control = ({ multiple = false, ...props }: ControlProps) => {
  const { id, onFilesSelected } = useFileInput();

  const handleFilesSelected = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
      const files = Array.from(event.target.files);
      onFilesSelected(files, multiple);
      return;
    }

    return;
  };

  return (
    <input
      id={id}
      type="file"
      className="sr-only"
      onChange={handleFilesSelected}
      multiple={multiple}
      {...props}
    />
  );
};

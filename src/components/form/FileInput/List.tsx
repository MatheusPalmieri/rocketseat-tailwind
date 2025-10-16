"use client";

import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Item } from "./Item";
import { useFileInput } from "./Root";

export const List = () => {
  const { files } = useFileInput();
  const [parent] = useAutoAnimate();

  return (
    <div ref={parent} className="mt-4 space-y-3">
      {files.map(({ name, size }) => (
        <Item key={name} name={name} size={size} state="complete" />
      ))}
    </div>
  );
};

import type { ComponentProps } from "react";

export const Textarea = (props: ComponentProps<"textarea">) => {
  return (
    <textarea
      className="min-h-30 w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    />
  );
};

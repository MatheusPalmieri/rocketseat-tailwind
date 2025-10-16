"use client";

import { Button } from "@/components/ui/Button";
import { formatBytes } from "@/utils/formatBytes";
import { Trash2, UploadCloud } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { tv, VariantProps } from "tailwind-variants";
import { useFileInput } from "./Root";

const fileItem = tv({
  slots: {
    container: "group flex items-start gap-4 rounded-lg border p-4",
    icon: "rounded-full border-4 p-2",
    progress: "h-2 rounded-full",
  },

  variants: {
    state: {
      progress: {
        container: "border-zinc-300",
        icon: "border-violet-100 bg-violet-200 text-violet-600",
        progress: "bg-violet-600",
      },
      complete: {
        container: "bg-green-50/50 border-green-300",
        icon: "border-green-100 bg-green-200 text-green-600",
        progress: "bg-green-600",
      },
      error: {
        container: "bg-red-50/50 border-red-300",
        icon: "border-red-100 bg-red-200 text-red-600",
        progress: "bg-error-600",
      },
    },
  },

  defaultVariants: {
    state: "progress",
  },
});

interface ItemProps extends VariantProps<typeof fileItem> {
  name: string;
  size: number;
}

export const Item = ({ name, size, state }: ItemProps) => {
  const { onRemoveFile } = useFileInput();

  const { container, icon, progress } = fileItem({ state });

  return (
    <div className={container()}>
      <div className={icon()}>
        <UploadCloud className="size-4" />
      </div>

      {state === "error" ? (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="space-y-0">
            <p className="text-sm font-medium text-red-500">
              Upload failed, please try again.
            </p>
            <span className="text-sm text-red-800">{name}</span>
          </div>

          <Button variant="error">Try again</Button>
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="space-y-0">
            <p className="text-sm font-medium text-zinc-700">{name}</p>
            <span className="text-sm text-zinc-500">{formatBytes(size)}</span>
          </div>

          <div className="flex w-full items-center gap-3">
            <div className="h-2 flex-1 rounded-full bg-zinc-100">
              <div
                className={twMerge(
                  progress(),
                  state === "complete" ? "w-full" : "w-4/5",
                )}
              />
            </div>
            <span className="text-sm font-medium text-zinc-700">
              {state === "complete" ? "100%" : "80%"}
            </span>
          </div>
        </div>
      )}

      <Button
        variant="ghost"
        size="icon"
        className="ml-auto"
        onClick={() => onRemoveFile(name)}
      >
        <Trash2 className="size-5 text-zinc-500" />
      </Button>
    </div>
  );
};

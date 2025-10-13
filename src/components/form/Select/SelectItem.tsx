"use client";

import * as SelectPrimitive from "@radix-ui/react-select";
import { Check } from "lucide-react";

export const SelectItem = ({
  children,
  ...props
}: SelectPrimitive.SelectItemProps) => {
  return (
    <SelectPrimitive.Item
      className="flex items-center justify-between gap-2 px-3 py-2.5 transition-colors duration-200 outline-none data-[highlighted]:bg-zinc-50"
      {...props}
    >
      <SelectPrimitive.ItemText className="text-black">
        {children}
      </SelectPrimitive.ItemText>

      <SelectPrimitive.ItemIndicator>
        <Check className="size-4 text-violet-500" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  );
};

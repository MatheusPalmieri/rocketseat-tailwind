"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { motion } from "motion/react";

interface TabItemProps {
  value: string;
  title: string;
  isSelected?: boolean;
}

export const TabItem = ({ value, title, isSelected }: TabItemProps) => {
  return (
    <Tabs.Trigger
      value={value}
      className="group relative px-3 pb-4 text-sm font-medium text-zinc-500 outline-none hover:text-violet-700 data-[state=active]:text-violet-600"
    >
      <span className="rounded-xs group-focus-visible:ring-2 group-focus-visible:ring-violet-400 group-focus-visible:ring-offset-4">
        {title}
      </span>

      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="absolute right-0 -bottom-px left-0 h-px bg-violet-700"
        />
      )}
    </Tabs.Trigger>
  );
};

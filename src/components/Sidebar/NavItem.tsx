import { ChevronDown, type LucideIcon } from "lucide-react";

interface NavItemProps {
  label: string;
  icon: LucideIcon;
}

export const NavItem = ({ label, icon: Icon }: NavItemProps) => {
  return (
    <nav className="space-y-0.5">
      <a
        href="#"
        className="group flex items-center gap-3 rounded px-3 py-2 transition-colors duration-200 hover:bg-violet-50"
      >
        <Icon className="size-5 text-zinc-500" />
        <span className="font-medium text-zinc-700 group-hover:text-violet-500">
          {label}
        </span>
        <ChevronDown className="ml-auto size-5 text-zinc-400 group-hover:text-violet-300" />
      </a>
    </nav>
  );
};

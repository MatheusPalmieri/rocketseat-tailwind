import { Search } from "lucide-react";
import { Logo } from "./Logo";
import { MainNavigation } from "./MainNavigation/MainNavigation";

export const Sidebar = () => {
  return (
    <aside className="space-y-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <div className="mx-1 flex items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
        <Search className="size-5 text-zinc-500" />

        <input
          type="text"
          placeholder="Search"
          className="flex-1 border-none bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none"
        />
      </div>

      <MainNavigation />
    </aside>
  );
};

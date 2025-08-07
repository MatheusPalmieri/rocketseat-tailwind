import { LogOut } from "lucide-react";

export const Profile = () => {
  return (
    <div className="flex gap-3">
      <img
        src="https://github.com/matheuspalmieri.png"
        alt="Avatar"
        className="size-10 rounded-full"
      />

      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-zinc-500">
          Matheus Palmieri
        </span>
        <span className="truncate text-sm text-zinc-500">
          matheus@backstage.app
        </span>
      </div>

      <button
        type="button"
        className="ml-auto rounded-md p-2 transition-colors duration-200 hover:bg-zinc-50"
      >
        <LogOut className="size-5 text-zinc-500" />
      </button>
    </div>
  );
};

import { LogOut } from "lucide-react";
import { Button } from "../ui/Button";

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

      <Button variant="ghost" className="ml-auto">
        <LogOut className="size-5 text-zinc-500" />
      </Button>
    </div>
  );
};

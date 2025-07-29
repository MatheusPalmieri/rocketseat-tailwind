import {
  BarChart,
  CheckSquare,
  Flag,
  Home,
  SquareStack,
  Users,
} from "lucide-react";
import { NavItem } from "./NavItem";

export const MainNavigation = () => {
  return (
    <nav className="space-y-0.5">
      <NavItem label="Home" icon={Home} />
      <NavItem label="Dashboard" icon={BarChart} />
      <NavItem label="Projects" icon={SquareStack} />
      <NavItem label="Tasks" icon={CheckSquare} />
      <NavItem label="Reporting" icon={Flag} />
      <NavItem label="Users" icon={Users} />
    </nav>
  );
};

import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function DefaultLayout() {
  return (
    <div className="bg-background dark:bg-zinc-900">
      <Header />
      <Outlet />
    </div>
  );
}

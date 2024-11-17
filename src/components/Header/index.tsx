import { ClipboardText, MapPin, Moon, Sun } from "phosphor-react";
import { Cart } from "../ui/Cart";
import { NavLink } from "react-router-dom";
import { MenuMobile } from "./MenuMobile";
import { useState, useEffect } from "react";

export function Header() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (localStorage.theme === "dark") {
      return true;
    } else if (localStorage.theme === "light") {
      return false;
    } else {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [isDarkMode]);

  const darkModeHandler = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="sticky top-0 z-10 bg-background py-8 dark:bg-zinc-900">
      <div className="mx-3 flex max-w-container items-center justify-between xl:mx-auto">
        <NavLink to="/">
          <img src={isDarkMode ? "/logodark.svg" : "/logo.svg"} />
        </NavLink>

        <div className="flex items-center gap-3">
          {isDarkMode ? (
            <Sun
              size={36}
              className="cursor-pointer rounded-md border border-purple p-2 text-zinc-50 duration-300 hover:bg-zinc-800 hover:text-white"
              onClick={darkModeHandler}
            />
          ) : (
            <Moon
              size={36}
              className="cursor-pointer rounded-md border border-zinc-300 p-2 duration-300 hover:bg-zinc-800 hover:text-zinc-50"
              onClick={darkModeHandler}
            />
          )}

          <div className="hidden items-center gap-1 rounded-md bg-purple-light p-2 sm:flex">
            <MapPin className="size-[22px] text-purple" weight="fill" />
            <span className="font-roboto text-sm leading-line text-purple-dark">
              Fortaleza, CE
            </span>
          </div>

          <div className="hidden cursor-pointer items-center gap-1 rounded-md bg-purple p-2 text-white sm:flex">
            <ClipboardText className="size-[22px]" />
            <span className="font-roboto text-sm leading-line">
              Meus Pedidos
            </span>
          </div>
          <Cart />
          <MenuMobile />
        </div>
      </div>
    </header>
  );
}

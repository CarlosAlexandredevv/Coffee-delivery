import { ClipboardText, MapPin, Moon, Sun } from 'phosphor-react';
import { Cart } from '../ui/Cart';
import { NavLink } from 'react-router-dom';
import { MenuMobile } from './MenuMobile';
import { useState, useEffect } from 'react';

export function Header() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (localStorage.theme === 'dark') {
      return true;
    } else if (localStorage.theme === 'light') {
      return false;
    } else {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [isDarkMode]);

  const darkModeHandler = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="py-8 sticky top-0 z-10 bg-background dark:bg-zinc-900">
      <div className="flex items-center justify-between max-w-container xl:mx-auto mx-3">
        <NavLink to="/">
          {isDarkMode ? <img src="logodark.svg" /> : <img src="logo.svg" />}
        </NavLink>

        <div className="flex gap-3 items-center">
          {isDarkMode ? (
            <Sun
              size={36}
              className="rounded-md  bg-zinc-50  border p-2 hover:bg-zinc-800 hover:text-white text-zinc-600 duration-300 cursor-pointer hidden sm:block"
              onClick={darkModeHandler}
            />
          ) : (
            <Moon
              size={36}
              className="rounded-md border-zinc-300 border p-2 hover:bg-zinc-800 hover:text-zinc-50 duration-300 cursor-pointer hidden sm:block"
              onClick={darkModeHandler}
            />
          )}

          <div className=" gap-1 items-center bg-purple-light rounded-md p-2 hidden sm:flex">
            <MapPin className="size-[22px] text-purple" weight="fill" />
            <span className="text-purle-dark font-roboto text-sm leading-line">
              Fortaleza, CE
            </span>
          </div>

          <div className=" gap-1 items-center bg-purple rounded-md p-2 text-white cursor-pointer hidden sm:flex">
            <ClipboardText className=" size-[22px]" />
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

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ClipboardText, List, MapPin, Moon, Sun } from 'phosphor-react';
import { useState, useEffect } from 'react';

export function MenuMobile() {
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
    <Sheet>
      <SheetTrigger>
        <List
          size={36}
          className="rounded-md border-zinc-300 border p-2  duration-300 cursor-pointer sm:hidden dark:border-zinc-50"
        />
      </SheetTrigger>
      <SheetContent className="bg-zinc-900 border-none">
        <SheetHeader>
          <SheetDescription className="flex flex-col h-screen gap-3 mt-6">
            <div className="flex gap-1 items-center bg-purple-light rounded-md p-2 ">
              <MapPin className="size-[22px] text-purple" weight="fill" />
              <span className="text-purle-dark font-roboto text-sm leading-line">
                Fortaleza, CE
              </span>
            </div>

            <div className=" flex gap-1 items-center bg-purple rounded-md p-2 text-white cursor-pointer">
              <ClipboardText className=" size-[22px]" />
              <span className="font-roboto text-sm leading-line">
                Meus Pedidos
              </span>
            </div>
            {isDarkMode ? (
              <Sun
                size={36}
                className="rounded-md  bg-zinc-50 p-2 hover:bg-zinc-800 hover:text-white text-zinc-600 duration-300 cursor-pointer mx-auto"
                onClick={darkModeHandler}
              />
            ) : (
              <Moon
                size={36}
                className="rounded-md bg-zinc-50 text-zinc-900 p-2 duration-300 cursor-pointer mx-auto"
                onClick={darkModeHandler}
              />
            )}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ClipboardText, List, MapPin, Moon } from 'phosphor-react';
export function MenuMobile() {
  return (
    <Sheet>
      <SheetTrigger>
        <List
          size={36}
          className="rounded-md border-zinc-300 border p-2  duration-300 cursor-pointer sm:hidden "
        />
      </SheetTrigger>
      <SheetContent>
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
            <Moon
              size={36}
              className="rounded-md border-zinc-300 border p-2 hover:bg-zinc-800 hover:text-white duration-300 cursor-pointer mx-auto"
            />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

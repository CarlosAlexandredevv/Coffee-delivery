import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ClipboardText, List, MapPin } from "phosphor-react";

export function MenuMobile() {
  return (
    <Sheet>
      <SheetTrigger>
        <List
          size={36}
          className="cursor-pointer rounded-md border border-zinc-300 p-2 duration-300 dark:border-purple sm:hidden"
        />
      </SheetTrigger>
      <SheetContent className="border-none dark:bg-zinc-900">
        <SheetHeader>
          <SheetDescription className="mt-6 flex h-screen flex-col gap-3">
            <div className="flex items-center gap-1 rounded-md bg-purple-light p-2">
              <MapPin className="size-[22px] text-purple" weight="fill" />
              <span className="font-roboto text-sm leading-line text-purple-dark">
                Fortaleza, CE
              </span>
            </div>

            <div className="flex cursor-pointer items-center gap-1 rounded-md bg-purple p-2 text-white">
              <ClipboardText className="size-[22px]" />
              <span className="font-roboto text-sm leading-line">
                Meus Pedidos
              </span>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

import { MapPin } from 'phosphor-react';

export function Header() {
  return (
    <header className="bg-background py-8">
      <div className="flex items-center justify-between max-w-[1160px] mx-auto">
        <img src="Logo.svg" />
        <div className="flex gap-3 items-center">
          <div className="flex gap-1 items-center bg-purple-light rounded-md p-2">
            <MapPin className="size-[22px] text-purple" weight="fill" />
            <span className="text-purle-dark font-roboto text-sm">
              Fortaleza, CE
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

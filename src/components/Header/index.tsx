import { MapPin } from 'phosphor-react';
import { Cart } from '../ui/Cart';
import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <header className="bg-background py-8 sticky top-0 z-10">
      <div className="flex items-center justify-between max-w-[72.5rem] xl:mx-auto mx-3">
        <NavLink to="/">
          <img src="Logo.svg" />
        </NavLink>

        <div className="flex gap-3 items-center">
          <div className="flex gap-1 items-center bg-purple-light rounded-md p-2">
            <MapPin className="size-[22px] text-purple" weight="fill" />
            <span className="text-purle-dark font-roboto text-sm">
              Fortaleza, CE
            </span>
          </div>
          <Cart />
        </div>
      </div>
    </header>
  );
}

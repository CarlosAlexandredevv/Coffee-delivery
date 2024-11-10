import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';

export function DefaultLayout() {
  return (
    <div className="bg-background overflow-x-hidden">
      <Header />
      <Outlet />
    </div>
  );
}

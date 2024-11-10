import { CoffeeList } from './components/coffee-list';
import { Intro } from './components/Intro';
export function Home() {
  return (
    <div>
      <Intro />
      <CoffeeList />
    </div>
  );
}

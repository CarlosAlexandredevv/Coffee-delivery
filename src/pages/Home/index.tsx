import { CoffeeList } from "./components/coffee-list";
import { Intro } from "./components/intro";
export function Home() {
  return (
    <div>
      <Intro />
      <CoffeeList />
    </div>
  );
}

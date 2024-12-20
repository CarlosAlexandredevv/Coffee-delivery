import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Checkout } from "./pages/Checkout";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Success } from "./pages/Success";
import { History } from "./pages/History";
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  );
}

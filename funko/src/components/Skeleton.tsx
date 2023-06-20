import { Outlet } from "react-router";
import { Footer } from "./Footer";
import { Header } from "./Header";

type Props = {};
export const Skeleton = (props: Props) => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

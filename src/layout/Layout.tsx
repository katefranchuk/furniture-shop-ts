import { FC } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const Layout: FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "100vh",
      }}
    >
      <>
        <Header />
        <main>
          <Outlet />
        </main>
      </>
      <Footer />
    </div>
  );
};

export default Layout;

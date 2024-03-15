import { ScrollRestoration, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <ScrollRestoration />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;

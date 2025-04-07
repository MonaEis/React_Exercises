import { Outlet } from "react-router-dom";

export function RootLayout() {
  return (
    <div className="container">
        {/* Hier kommt spaeter noch ein header hin */}
      <Outlet />
    </div>
  );
}

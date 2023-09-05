import { Outlet } from "react-router-dom";
import SideNav from "../component/SideNav";
import Navigation from "../component/Navigation";
/*import SetUp from "../pages/SetUp"*/

function RootLayout() {
  return (
    <>
      <SideNav />
      <Navigation/>
      {/*<SetUp/>*/}
      <Outlet />
    </>
  );
}

export default RootLayout;

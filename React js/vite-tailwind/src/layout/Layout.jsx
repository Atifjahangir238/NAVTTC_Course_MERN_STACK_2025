// // import React from "react";
// // import { Outlet } from "react-router-dom";
// // import Footer from "../components/Footer";
// // import Header from "../components/Header";

// // const Layout = () => {
// //   return (
// //     <>
// //       <Header />
// //       <Outlet />
// //       <Footer />
// //     </>
// //   );
// // };

// // export default Layout;

import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = () => {
  return (
    <div className="min-h-screen flex ">
      <div className="w-64 h-full bg-amber-100 fixed top-0 left-0">
        <Header />
      </div>
      <div className="flex flex-col ml-66">
        <main className="w-full flex-grow overflow-y-auto p-6 pb-24 bg-white left-64">
          <Outlet />
        </main>

        <div className="w-full bg-gray-100 border-t p-4 text-center fixed bottom-0 left-64 right-0">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;

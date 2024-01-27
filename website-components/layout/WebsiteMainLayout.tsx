import React, { ReactNode } from "react";
import Header from "@/website-components/Header";
import Footer from "@/website-components/Footer";

function WebsiteMainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main id="home" className="container pt-24 max-w-6xl website-bg-static">
        {children}
      </main>
      <footer className="container max-w-6xl">
        <Footer />
      </footer>
    </>
  );
}

export default WebsiteMainLayout;

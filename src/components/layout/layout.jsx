import React, { Children } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";

const layout = ({ Children }) => {
  return (
    <>
      <Header />
      {Children}
      <Footer />
    </>
  );
};

export default layout;

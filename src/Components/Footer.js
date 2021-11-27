import React from "react";

export const Footer = () => {
  let footerStyle = {
    // position: "absolute",
    // width: "100%",
    // top: "200vh",
  };
  return (
    <footer className="bg-dark text-light py-5" style={footerStyle}>
      <p className="text-center">Copyright &copy; MyTodoList.com</p>
    </footer>
  );
};

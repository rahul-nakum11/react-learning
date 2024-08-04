import React from "react";
import { Header } from "./app-layout/Header";
import { Footer } from "./app-layout/Footer";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div class="box-border">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

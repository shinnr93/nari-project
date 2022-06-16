import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import aaa from "./aaa";

export default function HelloPage() {
  return (
    <>
    <h1>없음</h1>
    <BrowserRouter>
      <Routes>
        <Route>
        <Route path="/aaa" element={<aaa />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

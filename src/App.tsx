/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import Home from "@/pages/Home";
import Recruitment from "@/pages/Recruitment";
import Lettings from "@/pages/Lettings";
import BlockManagement from "@/pages/BlockManagement";
import Auctions from "@/pages/Auctions";

import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" richColors />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recruitment" element={<Recruitment />} />
        <Route path="/lettings" element={<Lettings />} />
        <Route path="/block-management" element={<BlockManagement />} />
        <Route path="/auctions" element={<Auctions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

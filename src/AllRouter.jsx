import { Routes, Route } from "react-router-dom";
//pages
import Home from "./pages/Home";
import HocSiteProject from "./pages/HocSiteProject";

function AllRouter() {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="hoc-site-project" element={<HocSiteProject />} />
    </Routes>
  );
}

export default AllRouter;

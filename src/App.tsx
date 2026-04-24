import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteNav from "./components/SiteNav";
import ScrollProgressBar from "./components/ScrollProgressBar";
import Home from "./pages/Home";
import CaseStudyMlb from "./pages/CaseStudyMlb";
import { SITE } from "./data/site";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollProgressBar />
      <SiteNav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/ucsb-mlb" element={<CaseStudyMlb />} />
      </Routes>

      <footer className="border-t border-[color:var(--color-line)]">
        <div className="mx-auto max-w-6xl px-6 py-10 grid md:grid-cols-3 gap-6 items-end">
          <div />
          <div className="mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-muted)] md:text-center">
            {SITE.footer.updated} · {SITE.name}
          </div>
          <div className="flex md:justify-end items-center gap-4 mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-muted)]">
            <span>© {new Date().getFullYear()} {SITE.name}</span>
          </div>
        </div>
      </footer>
    </BrowserRouter>
  );
}

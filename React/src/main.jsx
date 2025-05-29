import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { lazy, Suspense } from "react";
import Index from "./pages/Index.jsx";

import "./assets/css/app.css";

const App = lazy(() => import("./app.jsx"));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<Index />}>
      <App />
    </Suspense>
  </StrictMode>
);

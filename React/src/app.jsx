import { BrowserRouter as Router, Routes, Route } from "react-router";
import { lazy, Suspense } from "react";
import Index from "./pages/Index.jsx";

const Employees = lazy(() => import("./pages/Employees.jsx"));

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Index />} />
        <Route path="/" element={<Index />} />
        <Route
          path="/employees"
          element={
            <Suspense fallback={null}>
              <Employees />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

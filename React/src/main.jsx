import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { lazy, Suspense } from "react";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';
import Index from "./pages/Index.jsx";

import "./assets/css/app.css";

const App = lazy(() => import("./app.jsx"));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Suspense fallback={<Index />}>
          <App />
        </Suspense>
      </PersistGate>
    </Provider>
  </StrictMode>
);

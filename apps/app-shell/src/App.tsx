import React from "react";
import { createRoot } from "react-dom/client";
import Router from "./Router";

import "./index.css";

const App = () => <Router />;

createRoot(document.getElementById("app")!).render(<App />);

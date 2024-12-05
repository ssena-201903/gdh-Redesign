import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { NavbarProvider } from "./context/NavbarContext";
import { CardProvider } from "./context/CardContext";
import { motion, AnimatePresence } from "framer-motion";

import ContentPage from "./pages/ContentPage/ContentPage";
import HomeDesktop from "./pages/HomePage/HomeDesktop";

import "./App.scss";
// import pushDataToFirestore from './pushDataToFirestore';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
              <motion.div
                initial={{ opacity: 0, x: "-50%" }} // New page comes from the left
                animate={{ opacity: 1, x: 0 }} // It slides to the center
                // exit={{ opacity: 0, x: 0 }} // Old page stays still
                transition={{ duration: 0.5 }}
              >
                <HomeDesktop />
              </motion.div>
          }
        />
        <Route
          path="/content"
          element={
            <NavbarProvider>
              <motion.div
                initial={{ opacity: 0, x: "100%" }} // New page comes from the right
                animate={{ opacity: 1, x: 0 }} // It slides to the center
                // exit={{ opacity: 0, x: 0 }} // Old page stays still
                transition={{ duration: 0.5 }}
              >
                <ContentPage />
              </motion.div>
            </NavbarProvider>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  // useEffect(() => {
  //   pushDataToFirestore();
  // }, []);
  // console.log("app.jsx created");

  return (
    <CardProvider>
      <Router>
        <AnimatedRoutes />
      </Router>
    </CardProvider>
  );
}

export default App;

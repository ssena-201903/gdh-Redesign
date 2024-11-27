import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
// import { CSSTransition, TransitionGroup } from "react-transition-group";
import { motion, AnimatePresence } from 'framer-motion';
// import pushDataToFirestore from './pushDataToFirestore';
// import Header from './components/layout/Header/Header'
// import TopHeader from './components/layout/Header/TopHeader';
// import NavbarOpen from './components/layout/Navbar/NavbarOpen';
// import HomeDesktop from './pages/HomePage/HomeDesktop';
// import ContentPage from "./pages/ContentPage"
// import ActionCard from "./components/layout/Card/ActionCard";
import "./App.scss";
// import HeaderNews from "./components/sections/HeaderNews/HeaderNews";
import ContentPage from "./pages/ContentPage/ContentPage";
import HomeDesktop from "./pages/HomePage/HomeDesktop";

function AnimatedRoutes() {
  const location = useLocation();

  return (
<AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0, x: "50%" }}  // New page comes from the right
              animate={{ opacity: 1, x: 0 }}        // It slides to the center
              exit={{ opacity: 0, x: 0 }}           // Old page stays still
              transition={{ duration: 0.5 }}
            >
              <HomeDesktop />
            </motion.div>
          }
        />
        <Route
          path="/content"
          element={
            <motion.div
              initial={{ opacity: 0, x: "100%" }}  // New page comes from the right
              animate={{ opacity: 1, x: 0 }}        // It slides to the center
              exit={{ opacity: 0, x: 0 }}           // Old page stays still
              transition={{ duration: 0.5 }}
            >
              <ContentPage />
            </motion.div>
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
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;

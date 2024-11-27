import React from 'react';
// import pushDataToFirestore from './pushDataToFirestore';
// import Header from './components/layout/Header/Header'
// import TopHeader from './components/layout/Header/TopHeader';
// import NavbarOpen from './components/layout/Navbar/NavbarOpen';
// import HomeDesktop from './pages/HomePage/HomeDesktop';
// import ContentPage from "./pages/ContentPage"
// import ActionCard from "./components/layout/Card/ActionCard";
import './App.scss';
// import HeaderNews from "./components/sections/HeaderNews/HeaderNews";
import ContentPage from './pages/ContentPage/ContentPage';

function App() {
  // useEffect(() => {
  //   pushDataToFirestore();
  // }, []);
  // console.log("app.jsx created");

  return (
    <div>
      {/* <HomeDesktop /> */}
      {/* <ContentPage/> */}
      {/* <HeaderNews/> */}
      <ContentPage/>
    </div>
  );
}

export default App;

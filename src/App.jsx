// import { useEffect } from 'react';
// import pushDataToFirestore from './pushDataToFirestore';
// import Header from './components/layout/Header/Header'
// import TopHeader from './components/layout/Header/TopHeader';
// import NavbarOpen from './components/layout/Navbar/NavbarOpen';
// import HomeDesktop from './pages/HomePage/HomeDesktop';
// import ContentPage from "./pages/ContentPage"
import ActionCard from "./components/layout/Card/ActionCard";
import './App.scss';

function App() {
  // useEffect(() => {
  //   pushDataToFirestore();
  // }, []);

  return (
    <div>
      {/* <HomeDesktop /> */}
      {/* <ContentPage/> */}
      <ActionCard width="200px" height="fit-content" margin="0" color="rgb(24, 23, 49, 0.6)" padding="8px 16px" />
    </div>
  );
}

export default App;

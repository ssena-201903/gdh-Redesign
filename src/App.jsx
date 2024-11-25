// import { useEffect } from 'react';
// import pushDataToFirestore from './pushDataToFirestore';
// import Header from './components/layout/Header/Header'
// import TopHeader from './components/layout/Header/TopHeader';
// import NavbarOpen from './components/layout/Navbar/NavbarOpen';
import HomeDesktop from './pages/HomePage/HomeDesktop';
import './App.scss';

function App() {
  // useEffect(() => {
  //   pushDataToFirestore();
  // }, []);

  return (
    <div>
      <HomeDesktop />
    </div>
  );
}

export default App;

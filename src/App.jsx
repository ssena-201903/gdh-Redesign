// import { useEffect } from 'react';
// import pushDataToFirestore from './pushDataToFirestore';
// import Header from './components/layout/Header/Header'
// import TopHeader from './components/layout/Header/TopHeader';
// import NavbarOpen from './components/layout/Navbar/NavbarOpen';
import HomePage from './pages/HomePage/HomePage';
import './App.scss';

function App() {
  // useEffect(() => {
  //   pushDataToFirestore();
  // }, []);

  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;

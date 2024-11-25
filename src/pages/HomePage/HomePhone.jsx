import React from 'react'
import TopHeader from '../../components/layout/Header/TopHeader';
import Header from '../../components/layout/Header/Header';
// import NewsCardImg from '../../components/layout/Card/NewsCardImg';
import "./HomePhone.scss";
import CardsGrid from '../../components/layout/Card/CardsGrid';


const HomePhone = () => {
  return (
    <div>
      <TopHeader/>
      <Header/>
      <div className='home-phone-grid'>
        <CardsGrid/>
      </div>
    </div>
  )
}

export default HomePhone

import React from 'react'
import './home.css';
import Featured from '../../components/featured/Featured'
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties';
import PropertyList from '../../components/propertyList/propertyList';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Home Guests Love</h1>
        <FeaturedProperties/>
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Home

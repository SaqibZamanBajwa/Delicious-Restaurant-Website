import React, { useState } from 'react';
import HomeSection from '../Components/HomeSection';
// import AboutSection from '../Components/AboutSection';
// import { HomeObjOne } from '../Components/AboutSection/Data';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar'
import AboutSection from '../Components/AboutSection';
import RestaurantSection from '../Components/RestaurantSection';
// import SpecialSection from '../Components/SpecialSection';
import MenuBarSection from '../Components/MenuBarSection';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HomeSection />
            <AboutSection />
            <RestaurantSection />
            <MenuBarSection />


            {/* <AboutSection {...HomeObjOne}/> */}
            {/* <SpecialSection /> */}





        </>
    )
}

export default Home;

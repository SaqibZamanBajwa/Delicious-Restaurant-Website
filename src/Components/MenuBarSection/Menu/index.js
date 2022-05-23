import React, { useState } from 'react'
import Starters from '../Starters'
import Salads from '../Salads'
import Speciality from '../Speciality'
import {
    MenuWrapper,
    MenuTopContent,
    MenuTitle,
    Orange,
    MenuFlexBoxes,
    BoxActive,
    Box
} from './MenuElements'
import ShowAll from '../ShowAll'

const Menu = () => {
    const [active, setActive] = useState("ShowAllMenu")
    return (
        <div>
            <MenuWrapper>
                <MenuTopContent>

                    <MenuTitle>
                        Check our tasty <Orange>Menu</Orange>
                    </MenuTitle>

                    <MenuFlexBoxes>
                        <BoxActive onClick={() => setActive("ShowAllMenu")}>Show All</BoxActive>
                        <Box onClick={() => setActive("StarterMenu")}>Starters</Box>
                        <Box onClick={() => setActive("SaladMenu")}>Salads</Box>
                        <Box onClick={() => setActive("SpecialityMenu")}>Speciality</Box>
                    </MenuFlexBoxes>

                </MenuTopContent>


                <div>

                    {active === "ShowAllMenu" && <ShowAll data={ShowAll} />}
                    {active === "StarterMenu" && <Starters data={Starters} />}
                    {active === "SaladMenu" && <Salads data={Salads} />}
                    {active === "SpecialityMenu" && <Speciality data={Speciality} />}
                </div>
            </MenuWrapper>


        </div>
    )
}

export default Menu;

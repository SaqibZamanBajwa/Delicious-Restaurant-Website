// import React, { useState } from 'react';
// import SpecialMenu from './SpecialMenu';
// import Data from './Data';
// // import  arr1 from './Data';

// import {
//     Menubar,
//     ActiveMenu,
//     Menu,
// } from './SpecialElements';

// const SpecialSection = () => {
//     const [active, setActive] = useState("FirstCard")
//     return (
//         <div>
//             <Menubar>
//                 <ActiveMenu onClick={() => setActive("FirstCard")}>Show All</ActiveMenu>
//                 <Menu onClick={() => setActive("SecondCard")}>Starters</Menu>
//                 <Menu onClick={() => setActive("ThirdCard")}>Salads</Menu>
//                 <Menu onClick={() => setActive("FourthCard")}>Speciality</Menu>
//             </Menubar>


//             <div>
//                 {active === "FirstCard" && <SpecialMenu data={Data} cardIndex={0} />}
//                 {active === "SecondCard" && <SpecialMenu data={Data} cardIndex={1} />}
//                 {active === "ThirdCard" && <SpecialMenu data={Data} cardIndex={2} />}
//                 {active === "FourthCard" && <SpecialMenu data={Data} cardIndex={3} />}

//             </div>

     
            



//         </div>

//     )
// }

// export default SpecialSection

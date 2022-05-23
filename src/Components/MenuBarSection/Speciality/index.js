import React from 'react';
import { 
    SpecialityContainer,
    SpecialitySubContainer,
    Speciality_Col_1,
    Speciality_Col_2,
    SpecialityItemsContainer,
    SpecialityItems,
    ItemName,
    DottedLine,
    ItemPrice,
    SpecialityDescription
 } from './SpecilityElements';

const Speciality = () => {
    return (
        <div>
            <SpecialityContainer>

                <SpecialitySubContainer>

                    <Speciality_Col_1>

                        <SpecialityItemsContainer>
                            <SpecialityItems>
                            <ItemName>Bread barrel</ItemName> <DottedLine>................................................................................................</DottedLine> <ItemPrice>$6.95</ItemPrice>
                              
                            </SpecialityItems>
     
                        </SpecialityItemsContainer>

                        <SpecialityDescription>
                            Lorem, deren, trataro, filede, nerada
                        </SpecialityDescription>

                        <SpecialityItemsContainer>
                            <SpecialityItems>
                            <ItemName>Lobster Roll</ItemName> <DottedLine>...............................................................................................</DottedLine> <ItemPrice>$12.95</ItemPrice>
                                
                            </SpecialityItems>
    
                        </SpecialityItemsContainer>

                        <SpecialityDescription>
                        Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll
                        </SpecialityDescription>

                    </Speciality_Col_1>

                    <Speciality_Col_2>

                        <SpecialityItemsContainer>
                            <SpecialityItems>
                            <ItemName>Tuscan Grilled</ItemName> <DottedLine>............................................................................................</DottedLine> <ItemPrice>$9.95</ItemPrice>
                                
                            </SpecialityItems>
  
                        </SpecialityItemsContainer>

                        <SpecialityDescription>
                        Grilled chicken with provolone, artichoke hearts, and roasted red pesto
                        </SpecialityDescription>

                    </Speciality_Col_2>

                </SpecialitySubContainer>

            </SpecialityContainer>
        </div>
    )
}

export default Speciality;

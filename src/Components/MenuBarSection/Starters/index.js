import React from 'react'
import {
    StarterContainer,
    StarterSubContainer,
    Starter_Col_1,
    Starter_Col_2,
    StarterItemsContainer,
    StarterItems,
    ItemName,
    DottedLine,
    ItemPrice,
    StarterDescription
} from './StarterElements'

const Starter = () => {
    return (
        <div>
            <StarterContainer>

                <StarterSubContainer>

                    <Starter_Col_1>

                        <StarterItemsContainer>
                            <StarterItems>
                                <ItemName>Lobster Bisque</ItemName> <DottedLine>..........................................................................................</DottedLine> <ItemPrice>$5.95</ItemPrice>
                            </StarterItems>
                            
                        </StarterItemsContainer>

                        <StarterDescription>
                            Lorem, deren, trataro, filede, nerada
                        </StarterDescription>

                        <StarterItemsContainer>
                            <StarterItems>
                            <ItemName>Mozzarella Stick</ItemName> <DottedLine>.......................................................................................</DottedLine> <ItemPrice>$4.95</ItemPrice>
                                
                            </StarterItems>
                            
                        </StarterItemsContainer>

                        <StarterDescription>
                            Lorem, deren, trataro, filede, nerada
                        </StarterDescription>

                    </Starter_Col_1>

                    <Starter_Col_2>

                        <StarterItemsContainer>

                            <StarterItems>
                            <ItemName>Crab Cake</ItemName> <DottedLine>....................................................................................................</DottedLine> <ItemPrice>$7.95</ItemPrice>
                            </StarterItems>

                        </StarterItemsContainer>

                        <StarterDescription>
                            A delicate crab cake served on a toasted roll with lettuce and tartar sauce
                        </StarterDescription>

                    </Starter_Col_2>

                </StarterSubContainer>

            </StarterContainer>

        </div>
    )
}

export default Starter;

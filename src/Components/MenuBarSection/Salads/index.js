import React from 'react';
import {
    SaladContainer,
    SaladSubContainer,
    Salad_Col_1,
    Salad_Col_2,
    SaladItemsContainer,
    SaladItems,
    ItemName,
    DottedLine,
    ItemPrice,
    SaladDescription,
} from './SaladElements';

const Salads = () => {
    return (
        <div>
            <SaladContainer>

                <SaladSubContainer>

                    <Salad_Col_1>

                        <SaladItemsContainer>
                            <SaladItems>
                            <ItemName>Caesar Selections</ItemName> <DottedLine>.....................................................................................</DottedLine> <ItemPrice>$8.95</ItemPrice>
                                {/* <ItemName>
                                    Caesar Selections
                                </ItemName> */}
                            </SaladItems>
                            {/* <DottedLine>
                                ..............................................................................................................
                            </DottedLine>
                            <ItemPrice>
                                $8.95
                            </ItemPrice> */}
                        </SaladItemsContainer>

                        <SaladDescription>
                            Lorem, deren, trataro, filede, nerada
                        </SaladDescription>

                        <SaladItemsContainer>
                            <SaladItems>
                            <ItemName>Spinach Salad</ItemName> <DottedLine>............................................................................................</DottedLine> <ItemPrice>$9.95</ItemPrice>
                                {/* <ItemName>
                                    Spinach Salad
                                </ItemName> */}
                            </SaladItems>
                            {/* <DottedLine>
                                ...........................................................................................................
                            </DottedLine>
                            <ItemPrice>
                                $9.95
                            </ItemPrice> */}
                        </SaladItemsContainer>

                        <SaladDescription>
                            Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette
                        </SaladDescription>

                    </Salad_Col_1>

                    <Salad_Col_2>

                        <SaladItemsContainer>
                            <SaladItems>
                            <ItemName>Greek Salad</ItemName> <DottedLine>.................................................................................................</DottedLine> <ItemPrice>$9.95</ItemPrice>
                                {/* <ItemName>
                                    Greek Salad
                                </ItemName> */}
                            </SaladItems>
                            {/* <DottedLine>
                                ..............................................................................................................
                            </DottedLine>
                            <ItemPrice>
                                $9.95
                            </ItemPrice> */}
                        </SaladItemsContainer>

                        <SaladDescription>
                            Fresh spinach, crisp romaine, tomatoes, and Greek olives
                        </SaladDescription>

                    </Salad_Col_2>

                </SaladSubContainer>

            </SaladContainer>
        </div>
    )
}

export default Salads

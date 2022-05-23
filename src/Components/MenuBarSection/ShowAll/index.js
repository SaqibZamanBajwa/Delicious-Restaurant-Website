import React from 'react';
import {
    MenuWrapper,
    MenuListContainer,
    ShowAllColsContainer,
    ShowAll_Col_1,
    ShowAll_Col_2,
    MenuItemContainer,
    MenuItems,
    ItemName,
    ItemPrice,
    ItemsDescription,
    DottedLine
} from './ShowAllElements';

const ShowAll = () => {
    return (
        <div>
            <MenuWrapper>

                <MenuListContainer>
                    <ShowAllColsContainer>
                        <ShowAll_Col_1>

                            <MenuItemContainer>
                                <MenuItems>
                                    <ItemName>Lobster Bisque</ItemName> <DottedLine>..........................................................................................</DottedLine> <ItemPrice>$5.95</ItemPrice>
                                </MenuItems>
                                <ItemsDescription>
                                    <p>
                                        Lorem, deren, trataro, filede, nerada
                                    </p>
                                </ItemsDescription>
                            </MenuItemContainer>

                            <MenuItemContainer>
                                <MenuItems>
                                    <ItemName>Crab Cake</ItemName> <DottedLine>....................................................................................................</DottedLine> <ItemPrice>$7.95</ItemPrice>
                                </MenuItems>
                                <ItemsDescription>
                                    <p>
                                        A delicate crab cake served on a toasted roll with lettuce and tartar sauce
                                    </p>
                                </ItemsDescription>
                            </MenuItemContainer>

                            <MenuItemContainer>
                                <MenuItems>
                                    <ItemName>Tuscan Grilled</ItemName> <DottedLine>............................................................................................</DottedLine> <ItemPrice>$9.95</ItemPrice>
                                </MenuItems>
                                <ItemsDescription>
                                    <p>
                                        Grilled chicken with provolone, artichoke hearts, and roasted red pesto
                                    </p>
                                </ItemsDescription>
                            </MenuItemContainer>

                            <MenuItemContainer>
                                <MenuItems>
                                    <ItemName>Greek Salad</ItemName> <DottedLine>.................................................................................................</DottedLine> <ItemPrice>$9.95</ItemPrice>
                                </MenuItems>
                                <ItemsDescription>
                                    <p>
                                        Fresh spinach, crisp romaine, tomatoes, and Greek olives
                                    </p>
                                </ItemsDescription>
                            </MenuItemContainer>

                            <MenuItemContainer>
                                <MenuItems>
                                    <ItemName>Lobster Roll</ItemName> <DottedLine>...............................................................................................</DottedLine> <ItemPrice>$12.95</ItemPrice>
                                </MenuItems>
                                <ItemsDescription>
                                    <p>
                                        Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll
                                    </p>
                                </ItemsDescription>
                            </MenuItemContainer>

                        </ShowAll_Col_1>

                        <ShowAll_Col_2>
                            <MenuItemContainer>
                                <MenuItems>
                                    <ItemName>Bread barrel</ItemName> <DottedLine>................................................................................................</DottedLine> <ItemPrice>$6.95</ItemPrice>
                                </MenuItems>
                                <ItemsDescription>
                                    <p>
                                        Lorem, deren, trataro, filede, nerada
                                    </p>
                                </ItemsDescription>
                            </MenuItemContainer>

                            <MenuItemContainer>
                                <MenuItems>
                                    <ItemName>Caesar Selections</ItemName> <DottedLine>.....................................................................................</DottedLine> <ItemPrice>$8.95</ItemPrice>
                                </MenuItems>
                                <ItemsDescription>
                                    <p>
                                        Lorem, deren, trataro, filede, nerada
                                    </p>
                                </ItemsDescription>
                            </MenuItemContainer>

                            <MenuItemContainer>
                                <MenuItems>
                                    <ItemName>Mozzarella Stick</ItemName> <DottedLine>.......................................................................................</DottedLine> <ItemPrice>$4.95</ItemPrice>
                                </MenuItems>
                                <ItemsDescription>
                                    <p>
                                        Lorem, deren, trataro, filede, nerada
                                    </p>
                                </ItemsDescription>
                            </MenuItemContainer>

                            <MenuItemContainer>
                                <MenuItems>
                                    <ItemName>Spinach Salad</ItemName> <DottedLine>............................................................................................</DottedLine> <ItemPrice>$9.95</ItemPrice>
                                </MenuItems>
                                <ItemsDescription>
                                    <p>
                                        Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette
                                    </p>
                                </ItemsDescription>
                            </MenuItemContainer>
                        </ShowAll_Col_2>

                    </ShowAllColsContainer>
                </MenuListContainer>

            </MenuWrapper>
        </div>
    )
}

export default ShowAll;

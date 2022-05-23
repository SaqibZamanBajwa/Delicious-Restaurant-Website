import React from 'react';
import {
    RestaurantTopContent,
    RestaurantH1,
    Orange,
    RestaurantPara,
    RestaurantBoxes,
    RestaurantBox,
    RestaurantBoxH3,
    RestaurantBoxH4,
    RestaurantBoxPara
} from './RestaurantElements';


const RestaurantSection = () => {
    return (
        <div>
            <RestaurantTopContent>

                <RestaurantH1>
                    Why choose <Orange>Our Restaurant</Orange>
                </RestaurantH1>

                <RestaurantPara>
                    <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est <br />
                        adipisci expedita at voluptas atque vitae autem.</p>
                </RestaurantPara>

                <RestaurantBoxes>

                    <RestaurantBox>

                        <RestaurantBoxH3>01</RestaurantBoxH3>

                        <RestaurantBoxH4>
                            Lorem Ipsum
                        </RestaurantBoxH4>

                        <RestaurantBoxPara>
                            Ulamco laboris nisi ut aliquip ex ea <br />
                                commodo consequat. Et consectetur <br />
                                ducimus vero placeat
                        </RestaurantBoxPara>

                    </RestaurantBox>

                    <RestaurantBox>

                        <RestaurantBoxH3>02</RestaurantBoxH3>

                        <RestaurantBoxH4>
                            Repellat NiRestaurant
                        </RestaurantBoxH4>

                        <RestaurantBoxPara>
                            Dolorem est fugiat occaecati voluptate<br />
                                velit esse. Dicta veritatis dolor quod et <br />
                                vel dire leno para dest
                        </RestaurantBoxPara>

                    </RestaurantBox>

                    <RestaurantBox>

                        <RestaurantBoxH3>03</RestaurantBoxH3>

                        <RestaurantBoxH4>
                            Ad ad velit qui
                        </RestaurantBoxH4>

                        <RestaurantBoxPara>
                            Molestiae officiis omnis illo asperiores.<br />
                                Aut doloribus vitae sunt debitis quo vel <br />
                                nam quis
                        </RestaurantBoxPara>

                    </RestaurantBox>

                </RestaurantBoxes>

            </RestaurantTopContent>

        </div>
    )
}

export default RestaurantSection;

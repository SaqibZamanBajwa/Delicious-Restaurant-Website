import React from 'react';
import { BsCheckAll } from "react-icons/bs"
import Promo from '../../Videos/Promo.mp4';
import {
    AboutContainer,
    AboutSubContainer,
    AboutVideoWrap, 
    Video,
    AboutTextWrap,
    AboutTextHeader,
    AboutTextPara,
    AboutListWrapper,
    AboutIconWrapper,
    Icons,
    AboutIconPara
} from './AboutElements';

const AboutSection = () => {
    return (
        <>
            <AboutContainer>

                <AboutSubContainer>

                    <AboutVideoWrap>

                        <Video
                            autoPlay
                            loop
                            muted
                            src={Promo}
                            type="video/mp4">
                        </Video>

                    </AboutVideoWrap>

                    <AboutTextWrap>

                        <AboutTextHeader>
                            <h3>Eum ipsam laborum deleniti <strong>velit pariatur architecto aut nihil</strong></h3>
                        </AboutTextHeader>

                        <AboutTextPara>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.Duis <br />
                                aute irure dolor in reprehenderit
                            </p>
                            <p>
                                Lorehm ipsum dolor sit amet, consectetur adipiscing elit, <br />
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                            </p>

                            <AboutListWrapper>
                                <AboutIconWrapper>
                                    <Icons><BsCheckAll /></Icons>
                                    <AboutIconPara>
                                        Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </AboutIconPara>
                                </AboutIconWrapper>

                                <AboutIconWrapper>
                                    <Icons><BsCheckAll /></Icons>
                                    <AboutIconPara>
                                        Duis aute irure dolor in reprehenderit in voluptate velit.
                                    </AboutIconPara>
                                </AboutIconWrapper>

                                <AboutIconWrapper>
                                    <Icons><BsCheckAll /></Icons>
                                    <AboutIconPara>
                                        Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda
                                        mastiro dolore eu fugiat nulla pariatur.
                                    </AboutIconPara>
                                </AboutIconWrapper>

                            </AboutListWrapper>

                            <AboutTextPara>
                                <p>
                                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                                </p>
                            </AboutTextPara>

                        </AboutTextPara>

                    </AboutTextWrap>

                </AboutSubContainer>

            </AboutContainer>
        </>
    )
}

export default AboutSection;

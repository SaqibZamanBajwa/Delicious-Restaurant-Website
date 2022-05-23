import styled from 'styled-components';
import {MdArrowRight, MdArrowForward} from 'react-icons/md';

export const HomeContainer = styled.div`
background: #0c0c0c; 
display: flex;
justify-content: center;
align-items: center; 
/* padding: 0 30px; */
height: 95vh;
position: relative;
z-index: 1;
`

export const HomeBg = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
opacity: 0.5;
`
export const HomeContent = styled.div`
z-index: 3;
max-width: 1200px;
position: absolute;
/* margin-top: 50px; */
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
`
export const HomeH1 = styled.h1`
color: #fff;
font-size: 48px;
text-align: center;
font-family: cursive;

@media screen and (max-width: 768px) {
    font-size: 40px;
}
@media screen and (max-width: 480px) {
    font-size: 32px;
}
`

export const HomeP = styled.p`
margin-top: 24px;
color: #fff;
font-size: 24px;
text-align: center;
max-width: 600px;

@media screen and (max-width: 768px) {
    font-size: 24px;
}
@media screen and (max-width: 480px) {
    font-size: 18px;
}
`

export const HomeBtnWrapper = styled.div`
margin-top: 32px;
display: flex;
flex-direction: row;
align-items: center;
`
// export const Button = styled.div`
//     background-color: yellow;
// `

export const ArrowForward = styled(MdArrowForward)`
margin-left: 8px;
font-size: 20px;
`
export const ArrowRight = styled(MdArrowRight)`
margin-left: 8px;
font-size: 20px;
`

export const HomeButton = styled.button`
font-weight: 600;
font-size: 13px;
letter-spacing: 1px;
text-transform: uppercase;
display: inline-block;
padding: 12px 30px;
border: 2px solid #ffb03b ;
border-radius: 50px;
transition: 0.5s;
line-height: 1;
margin: 0 10px;
color: #fff;
background: transparent ;



/* border-radius: 30px; */
/* padding: 10px; */
/* margin: 30px 10px 0 10px; */
/* width: 150px; */


&:hover{
 background: #ffb03b;    
 transition: all 0.2s ease-in-out;
 
}
`
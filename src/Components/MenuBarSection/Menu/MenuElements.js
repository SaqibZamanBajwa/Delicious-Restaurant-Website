import styled from 'styled-components';

export const MenuWrapper = styled.div`
/* padding: 60px 0; */
/* margin-top: 30px; */
/* border: 1px solid brown; */
`

export const MenuTopContent = styled.div`
width: 500px;
margin: 0 auto;
/* border: 1px solid red ; */
`

export const MenuTitle = styled.div`
text-align: center;
margin: 15px 0 0 0;
font-size: 32px;
font-weight: 700;
font-family: cursive;
letter-spacing: 0.1px;
word-spacing: -8px;
color: #5f5950;
`

export const Orange = styled.span`
color: #FFB03B;
`


export const MenuFlexBoxes = styled.div`
display: flex;
flex-direction: row;
/* max-width: 100%; */
justify-content: center;
margin: 35px 0 0 0;
`

export const BoxActive = styled.div`
padding: 8px 16px 10px 16px;
font-size: 14px;
line-height: 1;
color: #444444;
cursor: pointer;
margin: 0 5px 10px 5px;
border-radius: 50px;
border: 2px solid #FFB03B;
color: #fff;
background: #ffb03b;

`

export const Box = styled.div`
padding: 8px 16px 10px 16px;
font-size: 14px;
line-height: 1;
color: #444444;
cursor: pointer;
margin: 0 5px 10px 5px;
border-radius: 50px;
border: 2px solid #FFB03B;

&:hover{
    color: #fff;
    background: #ffb03b;
    transition: all ease-in-out 0.3s;
}
`
import styled from "styled-components";


export const StarterContainer = styled.div`
/* border:1px solid red; */
width: 100%;

`

export const StarterSubContainer = styled.div`
/* border:1px solid blue; */
display: flex;
flex-direction: row;

`

export const Starter_Col_1 = styled.div`
/* border:1px solid red; */
width: 50%;
padding: 30px;
`

export const Starter_Col_2 = styled.div`
/* border:1px solid red; */
width: 50%;
padding: 30px;
`

export const StarterItemsContainer = styled.div`
margin-top: 30px;
`

export const StarterItems = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
flex-wrap: wrap;
`

export const ItemName = styled.a`
text-decoration: none;
font-weight: 700;
color: #ff9b08;
cursor: pointer;
`

export const DottedLine = styled.span`
color: #dad8d4;
margin: 0 5px;
`

export const ItemPrice = styled.span`
font-weight: 600;
`

export const StarterDescription = styled.p`
  font-size: 14px;
font-style: italic;
font-family: "Comic Neue", sans-serif;
color: #948c81;
`
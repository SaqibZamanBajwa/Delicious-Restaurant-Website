import styled from "styled-components";

export const MenuWrapper = styled.div`
/* padding: 60px 0; */
`

export const MenuListContainer = styled.div`
/* border:1px solid red; */
width: 100%;
/* border: 1px solid blue; */
margin-top: 0px;

`

export const ShowAllColsContainer = styled.div`
/* border:1px solid blue; */
display: flex;
flex-direction: row;

`

export const ShowAll_Col_1 = styled.div`
/* border:1px solid red; */
width: 50%;
padding: 30px;
`

export const ShowAll_Col_2 = styled.div`
/* border:1px solid red; */
width: 50%;
padding: 30px;
`

export const MenuItemContainer = styled.div`
margin-top: 30px;
`

export const MenuItems = styled.div`
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

export const ItemPrice = styled.span`
font-weight: 600;
`

export const ItemsDescription = styled.p`
  font-size: 14px;
font-style: italic;
font-family: "Comic Neue", sans-serif;
color: #948c81;
`
export const DottedLine = styled.span`
color: #dad8d4;
margin: 0 5px;
`
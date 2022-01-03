import styled from 'styled-components';

export const DivProducts = styled.div`
margin-top: 60px;
margin-bottom: 30px;
`;

export const DivProductsContent = styled.div`
width: 90%;
max-width: 750px;
padding: 15px;
margin: 0px auto;
border: 0.5px solid lightblue;
`;
export const DivAddnewProduct = styled.div`
max-width: 600px;
background-color: white;
padding: 30px;
width: 85%;
margin: 150px auto 0px auto;
`;
export const DivAddnewProductBtns = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
`;

export const DivDisplayProducts = styled.div`
padding: 15px;
border: 0.5px solid lightgray;
margin: 10px 0px;
transition : all 0.25s ease-in-out;
&:hover{
    cursor: pointer;
    transition : all 0.25s ease-in-out;
    box-shadow: 0px 1px 1px rgba(0,0,0,0.2);
}
h3{
    color: #006699;
    margin-bottom: 10px;
}
.description{
    color: lightslategray;
}
.product-price{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    .date{
        color: gray;
    }
}
`;
import styled from '@emotion/styled';

export const Item = styled.li`
    display: flex;
    width: 400px;
    justify-content: space-between;
    margin-left: 20px;
    align-items: center;
`;

export const ItemName = styled.p`
    margin: 0;
    font-weight: 700;
`;

export const ItemNumber = styled.span`
    margin-left: 16px;
`;

export const Btn = styled.button`
    display: flex;
    margin-left: 16px;
    border-radius: 10px;
    padding: 16px 20px;
    margin-top: 15px;
    cursor: pointer;
    background-color: white;
    border-color: transparent;
    color: black;
    font-size: 16px;
    border: 2px solid red;
    font-weight: 700;

    :hover,
    :focus {
        color: black;
        background-color: tomato;
        transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
        border: 2px solid red;
    }
`;
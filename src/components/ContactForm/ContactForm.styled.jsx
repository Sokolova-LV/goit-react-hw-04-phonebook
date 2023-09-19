import styled from '@emotion/styled';

export const Form = styled.form`
    margin: 16px 20px; 
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
    font-weight: 700;
`;

export const Input = styled.input`
    width: 200px;
    padding: 16px;
    border-radius: 10px;
    margin-bottom: 16px;
    font-size: 16px;
    border: 2px solid violet;

    :hover,
    :focus {
        cursor: pointer;
        border: 2px solid violet;
        transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
        background-color: pink;
    }
`;

export const Button = styled.button`
    display: flex;
    border-radius: 10px;
    padding: 16px 20px;
    margin-top: 15px;
    cursor: pointer;
    background-color: white;
    border-color: transparent;
    color: black;
    font-size: 16px;
    border: 2px solid green;
    font-weight: 700;
    background-color: lightGreen;

    :hover,
    :focus {
        color: black;
        background-color: violet;
        transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
        border: 2px solid violet;
    }
`;
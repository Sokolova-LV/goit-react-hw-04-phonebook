import styled from '@emotion/styled';

export const Label = styled.label`
    display: flex;
    margin: 16px 20px; 
    flex-direction: column;
    font-weight: 700;
`;

export const Input = styled.input`
    width: 200px;
    padding: 16px;
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 16px;
    font-size: 16px;
    border: 2px solid blue;

    :hover,
    :focus {
        cursor: pointer;
        border: 2px solid blue;
        transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
        background-color: lightBlue;
    }
`;
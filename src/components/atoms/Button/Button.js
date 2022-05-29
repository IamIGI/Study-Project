import styled from 'styled-components';

export const Button = styled.button`
    margin: 15px 0;
    padding: ${({ isBig }) => (isBig ? '10px 38px' : '9px 25px')}; //suing given flag
    font-size: ${({ isBig, theme: { fontSize } }) => (isBig ? fontSize.m : fontSize.m)};
    background-color: ${({ theme }) => theme.colors.lightPurple};
    border-radius: 20px;
    border: none;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.darkGrey};

    &:hover {
        background-color: ${({ theme }) => theme.colors.darkPurple};
    }
`;

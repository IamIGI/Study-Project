import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;

    margin: 10px;
    border: 1px solid black;
    border-radius: 20px;
    padding: 20px 15px 20px 15px;
    margin-bottom: 50px;

    @media screen and (max-width: 550px) {
        flex-direction: column;
    }

    @media screen and (max-width: 450px) {
        padding: 10px;
    }
`;

export const SectionTitle = styled.div`
    margin-left: 40px;

    @media screen and (max-width: 450px) {
        margin-left: 20px;
    }
`;

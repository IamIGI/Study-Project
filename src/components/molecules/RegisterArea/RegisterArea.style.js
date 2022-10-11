import { Button } from 'components/atoms/Button/Button';
import { Bottom } from 'components/organisms/ProductPreview/ProductPreview.styles';
import styled from 'styled-components';

export const Wrapper = styled.div`
    margin: auto;
`;

export const BottomRegister = styled(Bottom)`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 10px;
    padding-top: 0;
    padding-bottom: 0;
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.colors.darkGrey};

    :hover {
        cursor: pointer;
    }
`;

export const ButtonSection = styled.div`
    text-align: center;
`;

export const WrapButton = styled(Button)`
    margin-left: 15px;
    padding: 10px;
`;

export const ErrMsg = styled.div`
    width: 70%;
    text-align: center;
    margin-left: 14%;
    background: ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.m_plus};
    font-weight: bold;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    border-radius: 0.5rem;
`;

export const UnValid = styled.span`
    color: ${({ theme }) => theme.colors.error};
`;

export const Instructions = styled.div`
    text-align: center;
    width: 50%;
    font-size: ${({ theme }) => theme.fontSize.m_plus};
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.white};
    padding: 0.25rem;
    position: relative;
    bottom: -7px;
    margin-left: 24%;
`;

import React from 'react';
import { Button } from 'components/atoms/Button/Button';
import useLogout from 'hooks/useLogout';
import { useNavigate } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import {
    Wrapper,
    List,
    StyledLink,
    TitleSection,
    Icon,
    Title,
    UserDescription,
    NavDescription,
    Line,
    LogoutLink,
} from './UserLogged.style';
import { VscAccount } from 'react-icons/vsc';
import { BsPerson } from 'react-icons/bs';
import { BiLogOutCircle } from 'react-icons/bi';
import { RiLogoutCircleLine } from 'react-icons/ri';
import CartHint from 'components/organisms/CartHint/CartHint';
import useBasket from 'hooks/useBasket';
const UserLogged = () => {
    const { auth } = useAuth();
    const { setBasketItems } = useBasket();
    const logout = useLogout();
    const navigate = useNavigate();

    const signOut = async () => {
        setBasketItems([]);
        await logout();
        // navigate('');
    };

    return (
        <Wrapper>
            <TitleSection>
                <Icon>
                    <BsPerson />
                </Icon>
                <Title>Twoje Konto</Title>
            </TitleSection>
            <UserDescription>
                <p>Witaj {auth.userName}</p>
            </UserDescription>
            <Line />

            <List>
                <li>
                    <StyledLink to="accountSettings/Settings">
                        <div>
                            <span>
                                {' '}
                                <VscAccount />
                            </span>
                        </div>
                        <NavDescription>Konto</NavDescription>
                    </StyledLink>
                </li>
                <li>
                    <LogoutLink onClick={signOut} to="">
                        <div>
                            <span>
                                {' '}
                                <RiLogoutCircleLine />
                            </span>
                        </div>
                        <NavDescription>Wyloguj sie</NavDescription>
                    </LogoutLink>
                </li>
            </List>
            <Line />
            <CartHint />
        </Wrapper>
    );
};

export default UserLogged;

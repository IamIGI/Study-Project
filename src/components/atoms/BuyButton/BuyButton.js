import React from 'react';
import { StyledButton } from './BuyButton.styles';
import { BsCartPlus } from 'react-icons/bs';

const BuyButton = () => (
    <StyledButton>
        {/* you give all the props, f.e: onClick given in UsersListItem */}
        <BsCartPlus />
    </StyledButton>
);

export default BuyButton;

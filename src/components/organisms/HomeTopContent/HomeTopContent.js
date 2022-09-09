import HotShootContent from 'components/molecules/HotShootContent/HotShootContent';
import React from 'react';
import {
    Advertisement,
    HotShootWrapper,
    ProductPrevWrapper,
    Recommended,
    RightTopWrapper,
} from './HomeTopContent.style';
import ProductPreview from '../ProductPreview/ProductPreview';
import SectionDescription from 'components/atoms/SectionDescription/SectionDescription';
import { AiOutlineHeart } from 'react-icons/ai';
import { filterInit } from 'data/Products';

const HomeTopContent = () => {
    return (
        <>
            <HotShootWrapper>
                <HotShootContent />
            </HotShootWrapper>
            <RightTopWrapper>
                <Advertisement>
                    <img src={require('../../../data/WelcomeIMG_resize.jpg')} alt="Missing img"></img>
                </Advertisement>
                <Recommended>
                    <SectionDescription title={'Polecane'} icon={<AiOutlineHeart />} />
                    <ProductPrevWrapper>
                        <ProductPreview filters={filterInit} allProducts="no" />
                    </ProductPrevWrapper>
                </Recommended>
            </RightTopWrapper>
        </>
    );
};

export default HomeTopContent;

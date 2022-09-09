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

const HomeTopContent = () => {
    const dataInt = {
        searchTerm: '',
        filters: {
            producers: [],
            processors: [],
            ram: {
                min: 8,
                max: 128,
            },
            disk: {
                min: 128,
                max: 2000,
            },
        },
        sortBy: 'none',
    };

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
                        <ProductPreview filters={dataInt} allProducts="no" />
                    </ProductPrevWrapper>
                </Recommended>
            </RightTopWrapper>
        </>
    );
};

export default HomeTopContent;

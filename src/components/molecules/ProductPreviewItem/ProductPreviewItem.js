import { useState, useEffect } from 'react';
import {
    Wrapper,
    Link,
    Top,
    ProductOpinionsShort,
    Rating,
    Opinions,
    StyledList,
    StyledRecord,
    Bottom,
    PriceSection,
    PriceOldValue,
    PriceValue,
    ProductInfo,
    NormalScreen,
} from './ProductPreviewItem.style';
import Star from 'components/atoms/Star/Star';
import BuyButton from 'components/atoms/BuyButton/BuyButton';
import useWindowSize from 'hooks/useWindowSize';
import ScrollTop from 'helpers/ScrollToTop';

const ProductPreviewItem = ({ item, allProducts, MayLikeComponent }) => {
    const windowSize = useWindowSize();
    const [showCPUDesc, setShowCPUDesc] = useState(true);
    const handleWindowSize = () => {
        if (windowSize.width <= 550) {
            setShowCPUDesc(false);
        } else {
            setShowCPUDesc(true);
        }
    };

    useEffect(() => {
        handleWindowSize();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [windowSize]);

    return (
        <Wrapper>
            <Link to={`/product/${item._id}`} onClick={MayLikeComponent && (() => ScrollTop('Top'))}>
                <Top>
                    <div>
                        <img src={item.prevImg} alt="article" />
                    </div>
                    <div>
                        <h1>{item.name}</h1>
                    </div>
                </Top>
                <ProductInfo>
                    {allProducts === 'yes' ? (
                        <>
                            <ProductOpinionsShort>
                                <Rating>
                                    {[...Array(6)].map((star, index) => {
                                        index += 1;
                                        return <Star opinionRating={item.averageStars} rate={index} key={index} />;
                                    })}
                                </Rating>
                                <Opinions>({item.numberOfOpinions})</Opinions>
                            </ProductOpinionsShort>
                            <StyledList>
                                <StyledRecord>
                                    {`${item.specification.processor.description.split('(')[0]}`}
                                    {showCPUDesc && `${item.specification.processor.description.split('(')[1]}`}
                                </StyledRecord>
                                <StyledRecord>{item.specification.ram.description}</StyledRecord>
                                <StyledRecord>{item.specification.graphics_card.description}</StyledRecord>
                                <StyledRecord>{item.specification.disk.description}</StyledRecord>
                            </StyledList>
                        </>
                    ) : (
                        <></>
                    )}

                    <Bottom>
                        {item.special_offer.mode ? (
                            <PriceSection>
                                <PriceOldValue>
                                    <span>{item.price + item.special_offer.price} zł</span>
                                </PriceOldValue>
                                <PriceValue>
                                    <span>{item.price} zł</span>
                                </PriceValue>
                            </PriceSection>
                        ) : (
                            <span>{item.price} zł</span>
                        )}
                    </Bottom>
                </ProductInfo>
            </Link>
            <NormalScreen>
                <BuyButton item={item} />
            </NormalScreen>
        </Wrapper>
    );
};

export default ProductPreviewItem;

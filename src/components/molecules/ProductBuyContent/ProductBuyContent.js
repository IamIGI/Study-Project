import { useEffect, useState } from 'react';
import {
    BuyButton,
    NumberInput,
    Separator,
    Wrapper,
    DiscountSize,
    OldPrice,
    PriceSection,
    CurrentPrice,
    BuySection,
    BuyIcon,
    HintSection,
    HintIcon,
    HintDescription,
    HintTitle,
    HintAsk,
} from './ProductBuyContent.style';
import useBasket from 'hooks/useBasket';
import { BsCartPlus, BsTruck } from 'react-icons/bs';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { RiCoinLine } from 'react-icons/ri';

const ProductBuyContent = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const { basketItems, setBasketItems } = useBasket();
    const [priceBeforeDiscount, setPriceBeforeDiscount] = useState(0);
    const [isDiscount, setIsDiscount] = useState(false);

    const getPrice = (product) => {
        if (product.special_offer.mode) {
            setPriceBeforeDiscount(product.price + product.special_offer.price);
            setIsDiscount(true);
        } else {
            setPriceBeforeDiscount(0); // don't matter
            setIsDiscount(false);
        }
    };

    useEffect(() => {
        getPrice(product);
    }, [product]);

    const addProduct = () => {
        let q = Number(quantity);
        // 👇️ check if array contains object with given product id
        const isFound = basketItems.some((item, index) => {
            if (item._id === product._id) {
                //set quantity to given product
                setBasketItems((prevItems) => {
                    return prevItems.map((item) => {
                        return item._id === product._id ? { ...item, quantity: item.quantity + q } : item;
                    });
                });
                return true;
            }
            return false;
        });

        if (!isFound) {
            console.log(`Adding new item to basket`);
            setBasketItems((prevItems) => {
                return [
                    ...prevItems,
                    {
                        prevImg: product.prevImg,
                        _id: product._id,
                        quantity: q,
                        name: product.name,
                        price: product.price,
                        isDiscount,
                        priceBeforeDiscount: priceBeforeDiscount,
                    },
                ];
            });
        }

        let basket = JSON.parse(localStorage.getItem('productsInBasket'));
        if (basket == null) {
            let addedProduct = { products: [product._id] };
            localStorage.setItem('productsInBasket', JSON.stringify(addedProduct));
        } else {
            basket.push(product._id);
            localStorage.setItem('productsInBasket', JSON.stringify(basket));
        }
    };

    return (
        <>
            <Wrapper>
                {isDiscount ? (
                    <>
                        <DiscountSize>Oszczędzasz {product.special_offer.price} zł </DiscountSize>
                        <PriceSection>
                            <OldPrice>{priceBeforeDiscount},00zł</OldPrice>
                            <CurrentPrice> {product.price},00 zł</CurrentPrice>
                        </PriceSection>
                    </>
                ) : (
                    <>
                        <PriceSection>
                            <CurrentPrice> {product.price},00 zł</CurrentPrice>
                        </PriceSection>
                    </>
                )}

                <BuySection>
                    <NumberInput placeholder="1" onChange={(e) => setQuantity(e.target.value)} />
                    <BuyButton onClick={addProduct}>
                        <BuyIcon>
                            <BsCartPlus />
                        </BuyIcon>
                        <div> Dodaj do koszyka</div>
                    </BuyButton>
                </BuySection>
                <HintSection>
                    <HintIcon>
                        <AiOutlineClockCircle />
                    </HintIcon>
                    <HintDescription>
                        <HintTitle>Wydłużony czas dostawy</HintTitle>
                        <HintAsk>Zapytaj o termin</HintAsk>
                    </HintDescription>
                </HintSection>
                <Separator />
                <HintSection>
                    <HintIcon>
                        <BsTruck />
                    </HintIcon>
                    <HintDescription>
                        <HintTitle>Darmowa dostawa</HintTitle>
                        <HintAsk>Sprawdź szczegóły</HintAsk>
                    </HintDescription>
                </HintSection>
                <Separator />
                <HintSection>
                    <HintIcon>
                        <RiCoinLine />
                    </HintIcon>
                    <HintDescription>
                        <HintTitle>
                            Rata tylko {(product.price / 24).toFixed(2)} zł <br />
                        </HintTitle>
                        <HintAsk>Oblicz ratę</HintAsk>
                    </HintDescription>
                </HintSection>
            </Wrapper>
        </>
    );
};

export default ProductBuyContent;

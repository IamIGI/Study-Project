import { Button } from 'components/atoms/Button/Button';
import {
    BottomSection,
    ListOfProducts,
    Product,
    Quantity,
    TitleSection,
    Wrapper,
    Description,
    TitleDescription,
    Link,
} from './BoughtPopUp.style';
import { RiCake3Line } from 'react-icons/ri';
import useBasket from 'hooks/useBasket';
import useOrder from 'hooks/useOrder';

const BoughtPopUp = ({ onClose, orderId }) => {
    const { basketItems } = useBasket();
    const { setOrderItem } = useOrder();
    console.log(basketItems);

    const goToOrderItem = (order) => {
        setOrderItem(order);
    };

    return (
        <Wrapper>
            <TitleSection>
                <div>
                    <RiCake3Line />
                </div>
                <TitleDescription> Gratulacje !</TitleDescription>
            </TitleSection>{' '}
            <ListOfProducts>
                <p>Zakupione produkty:</p>
                {basketItems.map((product) => (
                    <Product key={product._id}>
                        <Description>
                            <span>&#x2022;</span>
                            {product.name.substring(0, 35)} ...
                        </Description>
                        <Quantity> {product.quantity} szt.</Quantity>
                    </Product>
                ))}
            </ListOfProducts>
            <BottomSection>
                <Link onClick={() => goToOrderItem({ _id: orderId })} to={`/accountSettings/orders/history/${orderId}`}>
                    <Button onClick={() => onClose()}>Status zamówienia</Button>
                </Link>
                <Button onClick={() => onClose()}>Wyjdź</Button>
            </BottomSection>
        </Wrapper>
    );
};

export default BoughtPopUp;

import { useState } from 'react';
import { Wrapper, Icon, Alert, Subtitle, ListSection, Title, GitLink } from './NoRealWebsiteAlert.style';
import { FiAlertTriangle } from 'react-icons/fi';

const NoRealWebsiteAlert = () => {
    const [alert, setAlert] = useState(false);

    return (
        <Wrapper onMouseOver={() => setAlert(true)}>
            <Icon>
                <FiAlertTriangle />
            </Icon>
            {alert ? (
                <Alert onMouseOut={() => setAlert(false)}>
                    <Title>This is website is not real e-commerce website !!</Title>
                    <Subtitle>Date: 13.09.2022</Subtitle>
                    <Subtitle>Things implemented last patch:</Subtitle>
                    <ListSection>
                        <ul>
                            <li>Trigger function for HotShootPromotion</li>
                            <li>Alert about "this is not real website"</li>
                            <li>Info "be log in to save order"</li>
                            <li>upgrade css</li>
                            <li>Delete given product from cart</li>
                            <li>Buy without being logged</li>
                            <li>Navigate after authentication</li>
                        </ul>
                    </ListSection>
                    <Subtitle>InProgress:</Subtitle>
                    <ListSection>
                        <ul>
                            <li>RWD - hide accountPreview on minWidth</li>
                            <li>Cleaner code - make external function for component</li>
                        </ul>
                    </ListSection>
                    <GitLink>
                        <a href="https://github.com/users/IamIGI/projects/1/views/1">Project table</a>
                    </GitLink>
                </Alert>
            ) : (
                <></>
            )}
        </Wrapper>
    );
};

export default NoRealWebsiteAlert;

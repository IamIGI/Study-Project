import SectionDescription from 'components/atoms/SectionDescription/SectionDescription';
import { useEffect, useState } from 'react';
import {
    Wrapper,
    SectionTitle,
    LabelArea,
    SectionChange,
    CheckboxLocal,
    BottomWrapper,
    SavedInfo,
    SavedIcon,
    SavedDescription,
} from './AccountEntitlements.style';
import { GiStamper } from 'react-icons/gi';
import { Button } from 'components/atoms/Button/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { accountSettingsEnlistments } from 'data/FormSchema';
import useAuth from 'hooks/useAuth';
import useAxiosPrivate from 'hooks/useAxiosPrivate';
import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';
import { AiOutlineSave } from 'react-icons/ai';

const AccountEntitlements = ({ accountEnlistments }) => {
    const { auth } = useAuth();
    const axiosPrivate = useAxiosPrivate();
    const [enlistments, setEnlistments] = useState(accountEnlistments);
    const [isSaved, setIsSaved] = useState(false);

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(accountSettingsEnlistments),
    });

    useEffect(() => {
        setTimeout(() => {
            setIsSaved(false);
        }, 3000);
    }, [isSaved]);

    const handleCheck = (key, value) => {
        setEnlistments((prevValue) => {
            return {
                ...prevValue,
                [key]: value,
            };
        });
    };

    const onSubmit = async (data) => {
        data._id = auth.id;
        try {
            await axiosPrivate.put('user/enlistments', data);

            setIsSaved(true);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <SectionTitle>
                <SectionDescription title={'Zgody'} icon={<GiStamper />} />
            </SectionTitle>
            <Wrapper>
                {enlistments === undefined ? (
                    <LoadingAnimation />
                ) : (
                    <>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <SectionChange>
                                <CheckboxLocal
                                    type="checkbox"
                                    {...register('email')}
                                    onChange={(e) => handleCheck('email', e.target.checked)}
                                    checked={enlistments.email}
                                />
                                <LabelArea>
                                    Chcę otrzymywać informacje o aktualnych ofertach oraz promocjach w wiadomości e‑mail
                                </LabelArea>
                            </SectionChange>
                            <SectionChange>
                                <CheckboxLocal
                                    type="checkbox"
                                    {...register('sms')}
                                    onChange={(e) => handleCheck('sms', e.target.checked)}
                                    checked={enlistments.sms}
                                />
                                <LabelArea>Chcę otrzymywać wiadomości SMS.</LabelArea>
                            </SectionChange>
                            <SectionChange>
                                <CheckboxLocal
                                    type="checkbox"
                                    {...register('phone')}
                                    onChange={(e) => handleCheck('phone', e.target.checked)}
                                    checked={enlistments.phone}
                                />
                                <LabelArea>Chcę otrzymywać informacje telefonicznie</LabelArea>
                            </SectionChange>
                            <SectionChange>
                                <CheckboxLocal
                                    type="checkbox"
                                    {...register('adjustedOffers')}
                                    onChange={(e) => handleCheck('adjustedOffers', e.target.checked)}
                                    checked={enlistments.adjustedOffers}
                                />
                                <LabelArea>Chcę otrzymywać ofertę dopasowaną do moich potrzeb</LabelArea>
                            </SectionChange>
                            <BottomWrapper>
                                <Button type="submit">Zapisz Zgody</Button>

                                {isSaved ? (
                                    <SavedInfo>
                                        <SavedIcon>
                                            <AiOutlineSave />
                                        </SavedIcon>
                                        <SavedDescription>Zapisano</SavedDescription>
                                    </SavedInfo>
                                ) : (
                                    <></>
                                )}
                            </BottomWrapper>
                        </form>
                    </>
                )}
            </Wrapper>
        </>
    );
};

export default AccountEntitlements;

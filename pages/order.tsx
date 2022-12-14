import { FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';
import React from 'react';
import PageContainer from '../src/components/PageContainer/PageContainer';

const Order = () => {
    const validate = values => {
        const errors = {}
        if(!values.username){
            errors.username = 'Укажите имя'
            console.log('username is required')
        }
        return errors
    }
    return (
        <>
            <PageContainer
                pageTitle={"Оформить заказ"}
                showCart={false}
            >
                <div className='b-cart-wrapper'>
                    <section className='b-cart'>
                        <VStack>
                            <FormControl
                            validate={validate}
                            >
                                <FormLabel>Имя</FormLabel>
                                <Input name='username' placeholder='Евгений' required />
                            </FormControl>
                        </VStack>
                    </section>
                </div>

            </PageContainer>
        </>
    );
};

export default Order;

import React from 'react';
import {ProductConsumer} from '../context/context';

export default function HomePage() {
    return (
        <>
            <ProductConsumer>
                {value => {
                    return <h1>hello from homepage</h1>;
                    
                }}
            </ProductConsumer>
        </>
    )
}

import React, { FunctionComponent, useContext } from 'react';
import Head from 'next/head';

const Home: FunctionComponent = () => {
    return (
        <>
            <Head>
                <title>NextJS FE Static</title>
                <meta name='description' content='NextJS FE Static' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
        </>
    );
};

export default Home;

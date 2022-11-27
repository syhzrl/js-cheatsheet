import React, { FunctionComponent } from 'react';
import Head from 'next/head';

import DashboardScreen from 'containers/dashboard';

const Home: FunctionComponent = () => {
    return (
        <>
            <Head>
                <title>NextJS FE Static</title>
                <meta name='description' content='NextJS FE Static' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <DashboardScreen />
        </>
    );
};

export default Home;

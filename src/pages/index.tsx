import React, { FunctionComponent } from 'react';
import Head from 'next/head';

import DashboardScreen from 'containers/dashboard';

const Home: FunctionComponent = () => {
    return (
        <>
            <Head>
                <title>Javascript Cheatsheet</title>
                <meta name='description' content='Javascript Cheatsheet' />
                <link rel='icon' href='/javascript.ico' />
            </Head>
            <DashboardScreen />
        </>
    );
};

export default Home;

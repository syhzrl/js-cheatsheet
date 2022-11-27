import React from 'react';
import type { AppProps } from 'next/app';
import RefsProvider from 'context/Refs';

import 'globals.css';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
    return (
        <RefsProvider>
            <Component {...pageProps} />
        </RefsProvider>
    );
};

export default App;

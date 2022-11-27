import React, { FunctionComponent, useState, useEffect } from 'react';

import NavMenu from 'components/NavMenu';

const DashboardScreen: FunctionComponent = () => {
    return (
        <div className='bg-bgPrimary text-white h-full'>
            {/* <div className='bg-jsYellow text-bgPrimary text-4xl font-bold p-8 flex items-center justify-center'>
                <p>
                    Javascript Cheatsheet
                </p>
            </div> */}

            <div className='flex'>
                <NavMenu />

                <div className='w-full flex flex-col items-center justify-center'>
                    <p>
                        Hello
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DashboardScreen;

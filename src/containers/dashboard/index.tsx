import React, { FunctionComponent, useState, useEffect } from 'react';

import contents from 'assets/contents';

import NavMenu from 'components/NavMenu';
import Card from 'components/Card';

const DashboardScreen: FunctionComponent = () => {
    return (
        <div className='bg-bgPrimary text-white h-full'>
            <div className='flex'>
                <NavMenu />

                <div className='w-full flex flex-wrap items-start justify-center p-5 gap-5'>
                    {contents.map(item => {
                        const { title, desc, content } = item;

                        return (
                            <Card
                                key={title}
                                title={title}
                                desc={desc}
                                content={content}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default DashboardScreen;

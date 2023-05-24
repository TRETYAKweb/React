import { Outlet } from 'react-router-dom';
import { Navigation } from '../Navigation';

import { Footer } from '../footer';


export const MainLayout = (props: { hasNav?: boolean }) => {
    const { hasNav } = props;

    return (
        <>
            <main>
                {hasNav ? <div className='feed-wrapper'>
                    <div className='container'>
                        <Navigation />
                        <Outlet />
                    </div>
                </div> : <Outlet />}
            </main>
            <Footer />
        </>
    );
};

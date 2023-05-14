import { Outlet } from 'react-router-dom';
import { Navigation } from '../Navigation';

import { Footer } from '../footer';


export const LayoutWithNavigation: React.FC = () => {
    return (
        <>
            <main>
                <div className='feed-wrapper'>
                    <div className='container'>
                        <Navigation />
                        <Outlet />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

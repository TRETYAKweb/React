// Core
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ToastContainer, toast } from 'react-toastify';
import { configure } from 'mobx';

// Styles
import 'react-toastify/dist/ReactToastify.css';
import './theme/init.scss';

// Instruments

// Context Provider
import { StoreProvider  } from './lib/storeContext';


// lib
import { queryClient } from './lib';

// App
import { App } from './App';

configure({
    enforceActions:             'always',
    computedRequiresReaction:   true,
    observableRequiresReaction: true,
    reactionRequiresObservable: true,
});

createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient} >
        <StoreProvider>
            <Router>
                <App />
            </Router>
        </StoreProvider>
        <ReactQueryDevtools initialIsOpen = { false } />
        <ToastContainer />
    </QueryClientProvider>,
);

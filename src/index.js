// Core
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ToastContainer, toast } from 'react-toastify';

// Context Provider
import { Provider } from 'react-redux';

// Styles
import 'react-toastify/dist/ReactToastify.css';
import './theme/init.scss';

// lib
import { queryClient } from './lib';
import { store } from './lib/redux/init/store';

// App
import { App } from './App';

createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient} >
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
        <ReactQueryDevtools initialIsOpen = { false } />
        <ToastContainer />
    </QueryClientProvider>,
);

// Core
import React from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ToastContainer, toast } from 'react-toastify';

// Styles
import 'react-toastify/dist/ReactToastify.css';
import './theme/init.scss';

// Instruments

// lib
import { queryClient } from './lib';

// App
import { App } from './App';

createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient} >
        <App />
        <ReactQueryDevtools initialIsOpen = { false } />
        <ToastContainer />
    </QueryClientProvider>,
);

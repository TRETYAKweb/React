// Core
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ToastContainer, toast } from 'react-toastify';

// Styles
import 'react-toastify/dist/ReactToastify.css';
import './theme/init.scss';

// Instruments

// Context Provider
import { CommentsFormProvider } from './providers/CommentsFormProvider';


// lib
import { queryClient } from './lib';

// App
import { App } from './App';

createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient} >
        <CommentsFormProvider>
            <Router>
                <App />
            </Router>
        </CommentsFormProvider>
        <ReactQueryDevtools initialIsOpen = { false } />
        <ToastContainer />
    </QueryClientProvider>,
);

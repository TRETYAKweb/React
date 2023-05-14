// Core
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ToastContainer } from 'react-toastify';

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

ReactDOM.render(
    <QueryClientProvider client={queryClient}>
        <Provider store={store}>
            <Router>
                <App />
            </Router>
            <ToastContainer />
            <ReactQueryDevtools initialIsOpen={false} />
        </Provider>
    </QueryClientProvider>,
    document.getElementById('root'),
);

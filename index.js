import {createRoot} from 'react-dom/client';
import App from './src/app'
import { StrictMode } from 'react';
import 'react-tooltip/dist/react-tooltip.css';

const root = createRoot(document.getElementById('app'));
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
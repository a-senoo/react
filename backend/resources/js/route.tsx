import React from 'react'; //React17以降は自動でインポートされるようになりました
import { createRoot } from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Pages/HOME';
import Page from './Pages/Page';

const container = document.getElementById('app') as HTMLElement;
const root = createRoot(container);
root.render(<App />);

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'  element={<Home />} />
                <Route path='/page'  element={<Page />} />
            </Routes>
        </BrowserRouter>
    );
}


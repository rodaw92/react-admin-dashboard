import React, { useEffect } from 'react'; // By using this Hook, you tell React that your component needs to do something after render.
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import './App.css'

const App = () => {
    const activeMenu = true;
    return (

        // this is the power of tailwind by set the div in relative and dark mode by using class name
        // zIndex to make the div appear above all other elements
        // p-3 means that the padding is 3
        <div>
            <BrowserRouter>
                <div className='flex relative dark:bg-main-dark-bg'>
                    <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
                        <TooltipComponent content="Settings" position="Top">
                            <button type='button' className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
                                style={{ background: 'blue', borderRadius: '50%' }}>
                                <FiSettings />
                            </button>
                        </TooltipComponent>
                    </div>
                    {activeMenu ? (
                        <div>
                            Sidebar
                        </div>
                    ) : <div> Sidebar w-0 </div>}

                </div>
            </BrowserRouter>
        </div>
    )
}

export default App
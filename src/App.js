import React from 'react';
import Header from "./components/utils/Header";
import Navigation from "./layouts/Navigation";
import Search from "./layouts/Search";
import Logs from "./components/logs/Logs";

const App = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="bg-indigo-600 pb-32">

                <Navigation/>

                <Header title={'System Logs'}/>

            </div>

            <main className="-mt-32">
                <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">

                        <Search/>

                        <Logs/>

                    </div>
                </div>
            </main>

        </div>
    );
}

export default App;

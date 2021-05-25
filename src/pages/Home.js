import React from 'react';
import Search from "../layouts/Search";
import Logs from "../components/logs/Logs";
import Notify from "../components/alerts/Notify";

const Home = () => {
    return (
        <div>
            <Search/>
            <Logs/>
            <Notify />
        </div>
    );
};

export default Home;

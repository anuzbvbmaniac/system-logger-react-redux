import React from 'react';
import Search from "../layouts/Search";
import Logs from "../components/logs/Logs";
import Notify from "../components/alerts/Notify";
import EditLogModal from "../components/modals/EditLogModal";

const Home = () => {
    return (
        <div>
            <Search/>
            <Logs/>
            <Notify />
            <EditLogModal />
        </div>
    );
};

export default Home;

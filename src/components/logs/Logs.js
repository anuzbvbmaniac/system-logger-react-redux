import React, { useEffect, useState } from 'react';
import LogItem from "./LogItem";
import Spinner from "../../layouts/Spinner";

const Logs = () => {

    const [loading, setLoading] = useState(false);
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        getLogs();
        // eslint-disable-next-line
    }, []);


    const getLogs = async () => {
        setLoading(true);

        const response = await fetch('/logs');
        const data = await response.json();

        setLogs(data);
        setLoading(false);
    }

    if (loading) {
        return (<Spinner/>);
    }

    return (
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
                {!loading && logs.length === 0
                    ? (<p className="p-4">No logs found</p>)
                    : (logs.map((log) => (
                        <LogItem key={log.id} log={log}/>
                    )))
                }
            </ul>
        </div>
    );
};

export default Logs;

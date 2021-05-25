import React, { useEffect } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import { getLogs } from "../../actions/logsActions";

import LogItem from "./LogItem";
import Spinner from "../../layouts/Spinner";

const Logs = ({ log: { logs, loading }, getLogs }) => {

    useEffect(() => {
        getLogs();
        // eslint-disable-next-line
    }, []);

    if (loading || logs === null) {
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

Logs.propTypes = {
    log: PropTypes.object.isRequired,
    getLogs: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    log: state.log,
});

export default connect(
    mapStateToProps,
    { getLogs }
)(Logs);

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Spinner from "../../layouts/Spinner";
import TechItem from "./TechItem";

import { getTechs } from "../../actions/techsActions";
import { connect } from "react-redux";

const Techs = ({ tech: { techs, loading }, getTechs }) => {

    useEffect(() => {
        getTechs();
        // eslint-disable-next-line
    }, []);

    if (loading) {
        return <Spinner/>;
    }

    return (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {!loading && techs === null
                ? (<p className="p-4">No Technicians Found.</p>)
                : (techs.map((tech) => (
                    <TechItem key={tech.id} tech={tech}/>
                )))
            }
        </ul>
    );
};

Techs.propTypes = {
    tech: PropTypes.object.isRequired,
    getTechs: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    tech: state.tech
});

export default connect(
    mapStateToProps,
    { getTechs }
)(Techs);

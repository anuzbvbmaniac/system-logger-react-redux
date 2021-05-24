import React, { useEffect, useState } from 'react';
import Spinner from "../../layouts/Spinner";
import TechItem from "./TechItem";

const Techs = () => {

    const [loading, setLoading] = useState(false);
    const [techs, setTechs] = useState([]);

    useEffect(() => {
        getTechs();
        // eslint-disable-next-line
    }, []);

    const getTechs = async () => {
        setLoading(true);

        const response = await fetch('/techs');
        const data = await response.json();

        setTechs(data);
        setLoading(false);
    }

    if (loading) {
        return <Spinner/>
    }

    return (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {techs.map((tech) => (
                <TechItem key={tech.id} tech={tech}/>
            ))}
        </ul>
    );
};

export default Techs;

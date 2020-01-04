import React, { useState, useEffect } from 'react';
import styles from './Home.styles';
import injectSheet from 'react-jss';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import FilterIcon from 'mdi-react/FilterVariantIcon';

const Home = ({classes, ctx}) => {
    const [components, setComponents] = useState([]);
    const [filterTerm, setFilterTerm] = useState('');
    
    useEffect(() => {
        setComponents([...ctx.state.components]);
    }, [ctx.state.components]);

    const filterItems = (e) => {
        const term = (e.target.value + '').toLowerCase().trim();
        setFilterTerm(term);

        setComponents([...ctx.state.components].filter((comp) => {
            return (comp.name + '').toLowerCase().includes(term);
        }));
    };

    return (
        <div>
            <Header />

            <div className={classes.homeLinks}>
                <div className={classes.meta}>
                    <h1>Components</h1>
                    
                    <div className={classes.filter}>
                        <label htmlFor="filter">Filter Items</label>
                        <input type="text" id="filter" value={filterTerm} onChange={filterItems} />  
                        <FilterIcon size={18} /> 
                    </div>
                </div>

                {components.map((comp, index) => (
                    <Link to={`/component/${comp.html}`} title={`Go to ${comp.name}`} key={index}>
                        { comp.name }
                    </Link>
                ))}

                {((components.length <= 0) && (components.length !== ctx.state.components.length)) && (
                    <div>
                        No results, please refine your search.
                    </div>
                )}

                {(ctx.state.components.length <= 0) && (
                    <div>
                        No componets found. Please make sure this project is configured correctly.
                    </div>
                )}
            </div>
        </div>
    );
};

export default injectSheet(styles)(Home);

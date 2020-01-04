import React from 'react';
import styles from './Header.styles';
import injectSheet from 'react-jss';
import { DataProvider, DataConsumer } from '../DataContext';
import ComponentNav from './component-nav/ComponentNav';
import { Link } from 'react-router-dom';

const Header = ({classes, component, history}) => {

    return (
        <DataProvider>
            <DataConsumer>
                {context => (
                    <header className={classes.header}>
                        <div className={classes.meta}>
                            {Boolean(context.state.projectLogo) && (
                                <img src={context.state.projectLogo} alt="Project Logo" />
                            )}
                            <Link to="/" className={classes.appName} title="home">
                                { context.state.projectName }
                            </Link>
                            {Boolean(component) && (
                                <div className={classes.compName}>
                                    { component.name }
                                </div>
                            )}
                        </div>
                        <div>
                            <ComponentNav ctx={context} component={component} history={history} />
                        </div>
                    </header>
                )}
            </DataConsumer>
        </DataProvider>
    );
};

export default injectSheet(styles)(Header);

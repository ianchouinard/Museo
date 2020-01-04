import React from 'react';
import injectSheet from 'react-jss';
import styles from './ComponentNav.styles';
import ArrowLeftBoldBox from 'mdi-react/ArrowLeftBoldBoxIcon';
import ArrowRightBoldBox from 'mdi-react/ArrowRightBoldBoxIcon';

const ComponentNav = ({classes, ctx, component, history}) => {

    const changeComponent = (action) => {
        let newIndex = (action === 'next') ? component.index + 1 : component.index - 1;

        if (newIndex > (ctx.state.components.length - 1)) {
            newIndex = 0
        } else if (newIndex < 0) {
            newIndex = (ctx.state.components.length - 1);
        }

        const newComp = ctx.state.components[newIndex];
        history.push(`/component/${newComp.html}`);
    };

    return (
        <React.Fragment>
            {Boolean(component) && (ctx.state.components.length > 0) && (
                <div className={classes.componentNav}>
                    <span tabIndex="0" role="button" title="Previous component" className={classes.control} onClick={() => {changeComponent('prev')}}>
                        <ArrowLeftBoldBox />
                    </span>
                    <span className={classes.name}>{ component.name }</span>
                    <span tabIndex="0" role="button" title="Next component" className={classes.control} onClick={() => {changeComponent('next')}}>
                        <ArrowRightBoldBox />
                    </span>
                </div>
            )}
        </React.Fragment>
    );
};

export default injectSheet(styles)(ComponentNav);

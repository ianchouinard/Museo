import React, { useState, useEffect } from 'react';
import injectSheet from 'react-jss';
import styles from './ComponentViewLayout.styles';
import { useParams } from "react-router-dom";
import ComponentControls from './ComponentControls/ComponentControls';
import { Resizable } from 're-resizable';
import Header from '../Header/Header';

const ComponentViewLayout = ({classes, ctx, history}) => {
    const [ renderSize, setRenderSize ] = useState(0);
    const [ layoutType, setLayoutType ] = useState('col'); // || stacked
    const [ component, setComponent ] = useState({});
    let { componentName } = useParams();

    useEffect(() => {
        onControlsResize();
        setComponent(ctx.getComponent(componentName));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setComponent(ctx.getComponent(componentName));
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [componentName]);

    const onControlsResize = () => {
        const renderViewport = document.querySelector(`.${classes.render}`);
        setRenderSize(renderViewport.offsetWidth);
    };

    const onOrientationChange = (type) => {
        setLayoutType(type);
        setTimeout(() => {
            onControlsResize();
        }, 100);
    };

    const isStacked = layoutType !== 'col';

    return (
        <div className={classes.viewWrapper}>
            <Header component={component} history={history} />
            <div className={classes.componentViewLayout + (isStacked ? ' stacked' : '')}>
                <div className={classes.render}>
                    <div className={classes.renderInner}>
                        <iframe src={`/component-render/${componentName}`} title="Component View"></iframe>
                    </div>

                    <div className={classes.renderSize}>
                        { renderSize }px
                    </div>
                </div>

                <Resizable className={classes.controls + (isStacked ? ' stacked' : ' col-layout')} defaultSize={{width:550}} onResizeStop={onControlsResize}>
                    {Boolean(component) && (
                        <ComponentControls componentName={componentName} component={component} stacked={isStacked} onOrientationChange={onOrientationChange} />
                    )}
                </Resizable>
            </div>
        </div>
    );
};

export default injectSheet(styles)(ComponentViewLayout);

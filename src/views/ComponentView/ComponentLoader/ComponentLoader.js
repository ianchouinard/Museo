import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import injectSheet from 'react-jss';
import styles from './ComponentLoader.styles';
import { parseHighlight } from './ParseHighlight';

const ComponentLoader = ({classes, ctx}) => {
    let { componentName } = useParams();
    const [ componentHtml, setComponentHtml ] = useState('');
    const [ component, setComponent ] = useState({});

    useEffect(() => {
        let mounted = true;

        fetch(`/${componentName}.html`)
            .then(res => {
                return res.text();
            })
            .then(data => {
                if (!mounted) {
                    return;
                }

                setComponentHtml(data);
            });

        setInterval(() => {
            parseHighlight(localStorage.getItem('highlight'));
        }, 50);

        return () => {
            mounted = false;
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setComponent(ctx.getComponent(componentName));
    }, [ctx.components]);

    return (
        <div className={classes.componentLoader} style={{background: component.frameBackground}}>
            {(ctx.state.ready) && (
                <React.Fragment>
                    {ctx.state.cssPaths.map((path, index) => (
                        <link key={index} rel="stylesheet" type="text/css" href={`${path}`} />
                    ))}
                    <div id="component" dangerouslySetInnerHTML={{ __html: componentHtml }}></div>
                </React.Fragment>
            )}
        </div>
    );
};

export default injectSheet(styles)(ComponentLoader);

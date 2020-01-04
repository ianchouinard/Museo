import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import injectSheet from 'react-jss';
import styles from './ComponentLoader.styles';

const ComponentLoader = ({classes, ctx}) => {
    let { componentName } = useParams();
    const [ componentHtml, setComponentHtml ] = useState('');

    useEffect(() => {
        let mounted = true;

        fetch(`/library-src/${componentName}.html`)
            .then(res => {
                return res.text();
            })
            .then(data => {
                if (!mounted) {
                    return;
                }

                setComponentHtml(data);
            });

            return () => {
                mounted = false;
            };

            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={classes.componentLoader}>
            {(ctx.state.ready) && (
                <React.Fragment>
                    {ctx.state.cssPaths.map((path, index) => (
                        <link key={index} rel="stylesheet" type="text/css" href={`/library-src/${path}`} />
                    ))}
                    
                    <div dangerouslySetInnerHTML={{ __html: componentHtml }}></div>
                </React.Fragment>
            )}
        </div>
    );
};

export default injectSheet(styles)(ComponentLoader);

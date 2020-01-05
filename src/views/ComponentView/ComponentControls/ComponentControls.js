import React, { useEffect, useState } from 'react';
import styles from './ComponentControls.styles';
import injectSheet from 'react-jss';
import Highlight from 'react-highlight.js';
import ResizeHorizontal from 'mdi-react/ArrowCollapseHorizontalIcon';
import ResizeVertical from 'mdi-react/ArrowCollapseVerticalIcon';
import CollapseRight from 'mdi-react/ArrowCompressRightIcon';
import CollapseDown from 'mdi-react/ArrowCollapseDownIcon';
import BorderNone from 'mdi-react/BorderNoneIcon';
import { highlightElements } from './HighlightElements';

const ComponentControls = ({classes, componentName, stacked, onOrientationChange, component}) => {
    const [ componentHtml, setComponentHtml ] = useState('');
    const [ highlightActive, setHighlightActive ] = useState(true);

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

        return () => {
            mounted = false;
        };  
    }, [componentName]);

    useEffect(() => {
        highlightElements(highlightActive);
    }, [componentHtml, highlightActive]);

    useEffect(() => {
        setTimeout(() => {
            highlightElements(highlightActive);
        }, 1000);
    }, [stacked]);

    return (
        <div className={classes.componentControls}>
            <div className={classes.inner}>
                <div className={classes.title}>
                    <span>
                        { component.name }
                    </span>

                    <div className={classes.orientation}>
                        <div
                            tabIndex="0"
                            role="button"
                            title="Controls on right"
                            className={!stacked ? 'active' : ''}
                            onClick={() => {onOrientationChange('col')}}>
                            <CollapseRight size={15} />
                        </div>
                        <div
                            tabIndex="0"
                            role="button"
                            title="Controls on bottom"
                            className={stacked ? 'active' : ''}
                            onClick={() => {onOrientationChange('stacked')}}>
                            <CollapseDown size={15} />
                        </div>
                    </div>
                </div>

                <div className={stacked ? classes.stackedPanel : ''}>
                    {Boolean(component.description) && (
                        <div className={classes.description}>
                            { component.description }
                        </div>
                    )}

                    <div
                        className={classes.toggleHighlight + (highlightActive ? ' active' : '') + (stacked ? ' stacked' : '')}
                        tabIndex="0"
                        role="button"
                        title={highlightActive ? 'Disable element highlighting' : 'Enable element highlighting'}
                        onClick={() => {setHighlightActive(highlightActive ? false : true)}}>
                        <BorderNone size={16} />
                    </div>
                    <div className={classes.markup + (stacked ? ' stacked' : '')} id="comp-code">
                        <Highlight language="html" key={`stay-${Date.now()}`}>
                            { componentHtml }
                        </Highlight>
                    </div>
                </div>
            </div>

            {!stacked && (
                <div className={classes.resizeIndicator}>
                    <ResizeHorizontal />
                </div>
            )}

            {stacked && (
                <div className={classes.resizeIndicator + ' stacked'}>
                    <ResizeVertical />
                </div>
            )}
        </div>
    );
};

export default injectSheet(styles)(ComponentControls);

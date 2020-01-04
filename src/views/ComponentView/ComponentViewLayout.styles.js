const styles = {
    viewWrapper: {
        height: '100vh',
        width: '100%',
        overflow: 'hidden;'
    },
    componentViewLayout: {
        position: 'relative',
        display: 'flex',
        height: 'calc(100vh - 60px)',
        '& iframe': {
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            border: 'none',
            overflow: 'scroll'
        },
        '&.stacked': {
            flexDirection: 'column'
        }
    },
    render: {
        position: 'relative',
        flexGrow: '1',
        background: '#fff'
    },
    renderInner: {
        position: 'relative',
        padding: '0 10px',
        background: '#fff',
        width: '100%',
        height: '100%',
        borderRadius: '4px'
    },
    renderSize: {
        fontFamily: 'sans-serif',
        position: 'absolute',
        top: '20px',
        right: '20px',
        background: 'rgba(0,0,0,.5)',
        color: '#fff',
        padding: '5px',
        borderRadius: '3px'
    },
    controls: {
        background: '#f2f2f2',
        borderLeft: '2px solid #3F7FBF',
        boxShadow: 'rgba(0, 0, 0, 0.10) -3px 0px 5px 0px',
        '&.stacked': {
            width: '100% !important',
            height: 'auto',
            minHeight: '100px',
            borderLeft: 'none',
            borderTop: '2px solid #3F7FBF',
            boxShadow: 'rgba(0, 0, 0, 0.10) 0px -3px 5px 0px'
        },
        '&.col-layout': {
            height: '100% !important'
        }
    }
};

export default styles;

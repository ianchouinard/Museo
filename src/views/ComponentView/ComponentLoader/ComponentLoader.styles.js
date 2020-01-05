
const styles = {
    componentLoader: {
        background: '#f7f7f7',
        position: 'absolute',
        top: '0',
        left: '0',
        position: 'absolute',
        width: '100%',
        height: '100vh',
        display: 'flex',
        overflow: 'auto',
        backgroundSize: '10px 10px',
        backgroundImage: 'linear-gradient(to right, #eee 1px, transparent 1px), linear-gradient(to bottom, #eee 1px, transparent 1px)',
        '& > div': {
            margin: 'auto'
        },
        '& ._museo_active_': {
            outline: '2px dashed blue !important'
        }
    }
};

export default styles;

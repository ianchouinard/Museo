export const isActive = true;

export const highlightElements = (active) => {
    const tags = document.querySelectorAll('#comp-code .hljs-tag');
    const elements = [];
    const identifiers = {};
    let identifierQs = '';

    const writeQs = () => {
        identifierQs = '';

        Object.keys(identifiers).forEach((key) => {
            identifierQs += `${key}:${identifiers[key]}-`;
        });

        if (active) {
            localStorage.setItem('highlight', identifierQs);
        } else {
            localStorage.removeItem('highlight');
        }
    };

    tags.forEach((tag) => {
        if (tag.innerHTML.startsWith('&lt;') && !tag.innerHTML.startsWith('&lt;/')) {
            elements.push(tag);
        }
    });

    elements.forEach((ele, index) => {
        identifiers[index.toString()] = false;
        writeQs();

        ele.onmouseenter = () => {
            identifiers[index.toString()] = true;
            writeQs();
        };

        ele.onmouseleave = () => {
            identifiers[index.toString()] = false;
            writeQs();
        };
    });
};


let highlight = '';

export const parseHighlight = (value) => {
    if (!value) {
        return;
    }

    if (highlight !== value) {
        highlight = value;
    } else {
        return;
    }

    const comp = document.getElementById('component');

    if (!comp) {
        return;
    }

    const children = comp.getElementsByTagName("*");
    
    if (!children || !children.length) {
        return;
    }

    const elementParts = highlight.split('-');
    elementParts.pop();

    // console.log(comp.children);
    // console.log(highlight);
    elementParts.forEach((ele) => {
        const parsedEle = ele.split(':');
        const index = parseInt(parsedEle[0], 10);
        const active = parsedEle[1] === 'true';
        
        if (active) {
            children[index].classList.add('_museo_active_');
        } else {
            children[index].classList.remove('_museo_active_');
        }
    });

    
}

const getChildrenForNode = (node) => {
    const output = [node];

    if (node.children && node.children.length) {
        node.children.forEach((child) => {
            if (child.children && child.children.length) {
                output = output.concat(getChildrenForNode())
            }
        });
    }
}

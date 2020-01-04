import React, { Component } from 'react';

const DataContext = React.createContext();

export class DataProvider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            components: [],
            currentComponent: {},
            projectName: '',
            projectLogo: null,
            cssPaths: [],
            jsPaths: [],
            ready: false
        };
        this.mounted = true;
    }

    componentDidMount() {
        this.getConfig();
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    getConfig = () => {
        return fetch('/library-config.json')
            .then((response) => {
                return response.json()
            }).then((json) => {
                if (!this.mounted) {
                    return;
                }
                this.setState({
                    components: json.components,
                    projectName: json.projectName,
                    projectLogo: json.projectLogo,
                    cssPaths: json.css || [],
                    jsPaths: json.js || []
                }, () => {
                    this.writeAssets();
                });
            }).catch((ex) => {
            });
    }

    getComponent = (htmlName) => {
        if (!this.state.components) {
            return;
        }

        let componentIndex = null;

        const component = this.state.components.filter((comp, index) => {
            if (comp.html === htmlName) {
                componentIndex = index; 
            }
            return comp.html === htmlName;
        });

        if (component && component.length) {
            component[0].index = componentIndex;
            return component[0];
        } else {
            return {};
        }
    }

    writeAssets = () => {
        if (window.location.href.indexOf("component-render") !== -1) {
            this.state.jsPaths.forEach((js) => {
                const jscript = document.createElement('script');
                jscript.setAttribute('src',`${js}`);
                document.head.appendChild(jscript);
            });
        }

        this.setState({
            ready: true
        });
    };

    render() {
        return (
            <DataContext.Provider 
                value={{
                    state: this.state,
                    getConfig: this.getConfig,
                    getComponent: this.getComponent
                }}>
            { this.props.children }
            </DataContext.Provider>
        );
    }

}

export const DataConsumer = DataContext.Consumer;
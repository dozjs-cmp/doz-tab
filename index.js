import {define, defineWebComponent} from 'doz'
import tab from './src/tab'
import tabItem from './src/tab-item'

// expose component to global scope
function register() {
    if (typeof window !== 'undefined') {
        define('doz-tab', tab);
        define('doz-tab-item', tabItem);

        if (defineWebComponent) {
            let tabProps = [
                'items',
                'initial',
                'buttons-position',
                'height',
                'buttons-size',
                'body-background-color',
                'button-color',
                'button-background-color',
                'button-hover-color',
                'button-hover-background-color',
                'button-selected-color',
                'button-selected-background-color',
            ];

            let tabExposedMethods = [
                'selectTabItem'
            ];

            defineWebComponent('dwc-doz-tab', tab, tabProps, tabExposedMethods);
            //createDozWebComponent('doz-tab-item');
        }
    }
}

register();

export {
    tab,
    tabItem
}

if (module.hot) {
    module.hot.dispose(function () {
        register();
    })
}
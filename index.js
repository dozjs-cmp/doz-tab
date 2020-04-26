import {define} from 'doz'
import tab from './src/tab'
import tabItem from './src/tab-item'

// expose component to global scope
function register() {
    if (typeof window !== 'undefined') {
        define('doz-tab', tab);
        define('doz-tab-item', tabItem);
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
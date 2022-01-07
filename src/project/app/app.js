import Vue from 'nativescript-vue';

import Page1 from './components/Page1';

// Uncommment the following to see NativeScript-Vue output logs
Vue.config.silent = false;

new Vue({
    template: `
        <Frame>
            <Page1 />
        </Frame>`,

    components: {
        Page1
    }
}).$start();
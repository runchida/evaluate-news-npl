import './styles/base.scss'
import './styles/form.scss'
import {onClick} from './js/formHandler'
import {postTextToServer} from './js/apiCall'
import {updateResult} from './js/updateUI'

export {onClick, postTextToServer, updateResult}

// Check that service workers are supported
if ('serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/serviceWorker.js');
        console.log('service worker registered');
    });
}
import en from '../lang/en.json'
import ja from '../lang/ja.json'
import {
    addMessages,
    getLocaleFromNavigator,
    init,
} from 'svelte-i18n'

addMessages('en', en)
addMessages('ja', ja)
init({
    fallbackLocale: 'en',
    initialLocale: getLocaleFromNavigator(),
})
import Dative from 'dativejs'
import template from './ads.dative.html'


export let Ads = Dative.extend({
    template,
    data() {
        var hrefs = document.querySelectorAll('h1[id]');
        var href = [];
        hrefs.forEach(value => {
            href.push(value.id);
        })
        return {
            hrefs: href
        }
    }
})
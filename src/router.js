import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home'
import KnowYourDeputy from './components/legislature/KnowYourDeputy'
Vue.use(Router);

export default new Router({
    mode:'history',
    base:__dirname,
    routes:[
        {
            path:'/',
            name:'home',
            component: Home,
        },
        {
            path:'/conocetudiputado',// sin espacios y minusculas
            name:'know_your_deputy', //minusculas y sin espacios
            component: KnowYourDeputy,
        }
    ]
})
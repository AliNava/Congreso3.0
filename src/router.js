import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home'
import KnowYourDeputy from './components/legislature/KnowYourDeputy'
import ParliamentaryFractions from './components/legislature/ParliamentaryFractions'
import GraphicComposition from './components/legislature/GraphicComposition'
import BoardOfDirectors from './components/legislature/BoardOfDirectors'
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
        },
        {
            path:'/fraccionesparlamentarias',
            name:'parliamentary_fractions',
            component: ParliamentaryFractions,
        },
        {
            path:'/composiciongrafica',
            name:'graphic_composition',
            component: GraphicComposition,
        },
        {
            path:'/composiciongrafica',
            name:'board_of_directors',
            component: BoardOfDirectors,
        }
    ]
})
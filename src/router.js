import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home'
import KnowYourDeputy from './components/legislature/KnowYourDeputy'
import ParliamentaryFractions from './components/legislature/ParliamentaryFractions'
import GraphicComposition from './components/legislature/GraphicComposition'
import BoardOfDirectors from './components/legislature/BoardOfDirectors'
import CongressHistory from './components/stateCongress/CongressHistory'
import HonorWall from './components/stateCongress/HonorWall'
import LawmarkersSsalon from './components/stateCongress/LawmarkersSalon'
import PlenarySesionHall from './components/stateCongress/PlenarySesionHall'
import WhatIsStateCongress from './components/stateCongress/WhatIsStateCongress'
import Library from './components/stateCongress/Library'
import Legislatures from './components/stateCongress/Legislatures'
import Initiatives from './components/legislativeActivities/Initiatives'
import ActivityReports from './components/legislativeActivities/ActivityReports'
import LegislativesAgreement from './components/legislativeActivities/LegislativesAgreement'
import Opinions from './components/legislativeActivities/Opinions'
import PointsOfAgreement from './components/legislativeActivities/PointsOfAgreement'
import Article55 from './components/transparency/Article55'
import Article57 from './components/transparency/Article57'
import TransparencyPrevious from './components/transparency/TransparencyPrevious'
import InstituteOfLegislativeInvestigations from './components/InstituteOfLegislativeInvestigations'

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
            path:'/mesadirectiva',
            name:'board_of_directors',
            component: BoardOfDirectors,
        },
        {
            path:'/queescongresodelestado',
            name:'what_is_state_congress',
            component: WhatIsStateCongress,
        },
        {
            path:'/historiadelcongreso',
            name:'congress_history',
            component: CongressHistory,
        },
        {
            path:'/murodehonor',
            name:'honor_wall',
            component: HonorWall,
        },
        {
            path:'/biblioteca',
            name:'library',
            component: Library,
        },
        {
            path:'/salondesesionesplenarias',
            name:'plenary_session_hall',
            component: PlenarySesionHall,
        },
        {
            path:'/salonlegisladoras',
            name:'lawmarkers_salon',
            component: LawmarkersSsalon,
        },
        {
            path:'/legislaturas',
            name:'legislatures',
            component: Legislatures,
        },
        {
            path:'/iniciativas',
            name:'initiatives',
            component: Initiatives,
        },
        {
            path:'/puntosdeacuerdo',
            name:'points_of_agreement',
            component: PointsOfAgreement,
        },
        {
            path:'/dictamenes',
            name:'opinions',
            component: Opinions,
        },
        {
            path:'/acuerdoslegislativos',
            name:'legislatives_agreement',
            component: LegislativesAgreement,
        },
        {
            path:'/informedeactividades',
            name:'activity_resports',
            component: ActivityReports,
        },
        {
            path:'/articulo55',
            name:'article55',
            component: Article55,
        },
        {
            path:'/articulo57',
            name:'article57',
            component: Article57,
        },
        {
            path:'/transparenciaanterior',
            name:'transparency_previous',
            component: TransparencyPrevious,
        },
        {
            path:'/institutodeinvestigacioneslegislativas',
            name:'institute_of_legislative_investigations',
            component: InstituteOfLegislativeInvestigations,
        }

    ]
})
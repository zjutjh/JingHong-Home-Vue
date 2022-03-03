import {createRouter, createWebHistory} from 'vue-router'

export default createRouter({
    history: createWebHistory(),
    routes:[
        {path: '/', redirect: '/index'},
        // {path: '/index',}
        // {path: '/new_normal_form'}
        // {path: '/m/new_develop_form'}
        // {path: '/m/index'}
        // {path: '/m/new_normal_form'}
        // {path: '/m/new_develop_form'}
    ]
})
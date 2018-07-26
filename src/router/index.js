

const home = r => require.ensure([], () => r(require('@/page/home.vue')), '登录页');

export default [
    {
        path: '/',
        component: home
    }
]
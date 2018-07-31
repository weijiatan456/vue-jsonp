<template>
    <div>
        <mt-header title="列表">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <div>
            
        </div>
    </div>
</template>
<script>
import { getList,getRecommend} from '@/service/getData';
export default{
    name:'home',
    data(){
        return{
            list: ''
        }
    },
    mounted: function () {
        this._getRecommend();
        this._getList()
    },
    methods: {
        _getRecommend() {
            getRecommend().then((res) => {
                console.log(res)
            })
        },
        _getList() {
            getList().then((res) => {
                console.log(res);
            })
        }
        // 也可以写成如下写法
        // async _getList() {
        //     const res = await getList();
        //     console.log(res);
        // }
    }
}
</script>
<style scoped>

</style>
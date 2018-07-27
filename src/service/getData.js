import jsonp from './jsonp'
import {commonParams, options} from './config'
import axios from 'axios'

// jsonp请求数据
export function getRecommend() {
    const url = 'https://www.xiami.com/playercollect/list'
    const data = Object.assign({}, commonParams, {})
    return jsonp(url, data, options)
}

// 通过服务器代理获取数据
export function getList() {
    const url = '/service/getList'
    const data = Object.assign({}, {}, {
        v: '2.0',
        app_key: 1,
        class: 1,
        type: 1,
        _ksTS: '1532652214866_60',
        r: 'artist/hot-list'
    })

    return axios.get(url, {
        params: data
    }).then((res) => {
        return Promise.resolve(res.data)
    })
}
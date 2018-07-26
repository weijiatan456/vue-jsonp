import jsonp from './jsonp'
import {commonParams} from './config'
import axios from 'axios'

// jsonp请求数据
export function getRecommend() {
    const url = 'http://h.xiami.com/'
    const data = Object.assign({}, commonParams, {
        platform: 'h5',
        uin: 0,
        needNewCode: 1
    })
    return jsonp(url, data, options)
}

// 通过服务器代理获取数据
export function getList() {
    const url = '/api/getList'
    const data = Object.assign({}, commonParams, {
        class: 1,
        type: 1,
        callback: 'jsonp77',
        r: 'artist/hot-list'
    })

    return axios.get(url, {
        params: data
    }).then((res) => {
        return Promise.resolve(res.data)
    })
}
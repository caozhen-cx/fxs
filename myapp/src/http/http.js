import Axios from 'axios';

let baseUrl;

const instance = Axios.create({
    baseUrl,
    timeout:5000
})

export default function(url,method,data={},params={}){
    return instance({
        url,
        method,
        data,
        params,
    }).then(res=>{
        if(res.status>= 200 && res.status <300) {
            return res;
        }else {
            return Promise.reject(res.data.meta.msg);
        }
    }).catch(err=>{
        return Promise.reject(err);
    })
}


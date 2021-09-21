// import axios from "axios";
import { UHttp } from "u-webview-http";

// import { NativeUI } from "u-webview-ui";
//
// let cancelFunc = () =>{}
//
// axios.interceptors.request.use((config) => {
// 	cancelFunc = NativeUI.loadingToast(0)
// 	return config
// })
//
// axios.interceptors.response.use((config) => {
// 	cancelFunc()
// 	cancelFunc = () =>{}
// 	return config
// },() => {
// 	cancelFunc()
// 	cancelFunc = () =>{}
// 		},
// )


export const getSomething = () => {
  return new Promise((resolve, reject)=>{
		UHttp.get('http://47.103.211.10/api/msg/limit',{
			params:{
				count:20,
				lastId:0,
				from:1,
				to:2
			}
		}).then((value => {
			console.log(value)
			resolve(value)
		})).catch((e)=>{
			console.log(e)
			reject(e)
		})
	})
}

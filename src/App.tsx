import React, { useState} from 'react'
import {NativeUI} from "u-webview-ui";
import {getSomething} from "./request";
import {useSafeArea, setFullScreen, useAppInfo} from "u-webview-hook";


function App() {
  const [paddingTop,setPaddingTop] = useState(0)
  const [appInfo,setAppInfo] = useState({})

  useAppInfo((data => {
    console.log(data)
    if (data){
      setAppInfo(data)
    }
  }))

  useSafeArea((top)=>{
    console.log(top)
    if(top){
      setPaddingTop(top)
    }
  })

  const loading = async ()=>{
    await getSomething()
  }

  const openTextToast = (type:'success' | 'error' | 'warning')=>{
    NativeUI.textToast({type:type,text:'测试一下啊',duration:3000})
  }

  const setFull=()=>{
    setFullScreen(false, false, function(p1: any){
      console.log(p1)
    })
  }

  return (
      <div className="App">
        <h1>测试页面</h1>
        <h3>safeArea:{paddingTop}</h3>
        <h3>原生UI调用:</h3>
        <div style={{display:'flex',justifyContent:'space-around',alignItems:"center",marginBottom:'20px'}}>
          <button onClick={loading}>加载按钮</button><br/>
          <button onClick={()=>openTextToast('success')}>成功按钮</button><br/>
          <button onClick={()=>openTextToast('error')}>失败按钮</button><br/>
          <button onClick={()=>openTextToast('warning')}>警告按钮</button>
        </div>
        <button onClick={()=>setFull()}>
          全屏调用js端请求
        </button>
        <h3>app信息</h3>
        <ul>
          <li>appName:{(appInfo as any).appName}</li>
          <li>version:{(appInfo as any).version}</li>
        </ul>
      </div>
  );
}

export default App

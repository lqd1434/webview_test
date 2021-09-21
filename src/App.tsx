import React, { useState} from 'react'
import {NativeUI} from "u-webview-ui";
import {getSomething} from "./request";
import { useSafeArea } from "u-webview-hook";


function App() {
  const [paddingTop,setPaddingTop] = useState(0)

  useSafeArea((top)=>{
    console.log(top)
    setPaddingTop(top)
  })

  const handleClick1 = async ()=>{
    await getSomething()
  }

  const handleClick2 = (type:'success' | 'error' | 'warning')=>{
    NativeUI.textToast({type:type,text:'测试一下啊',duration:3000})
  }

  return (
      <div className="App">
        <h1>测试页面</h1>
        <h3>safeArea:{paddingTop}</h3>
        <button onClick={handleClick1}>加载按钮</button><br/>
        <button onClick={()=>handleClick2('success')}>成功按钮</button><br/>
        <button onClick={()=>handleClick2('error')}>失败按钮</button><br/>
        <button onClick={()=>handleClick2('warning')}>警告按钮</button>
      </div>
  );
}

export default App

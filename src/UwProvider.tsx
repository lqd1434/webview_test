import * as React from "react";
import {useApp} from "u-webview-hook";
import Loading from "./Loading";

const UwProvider:React.FC= ({children=null})=>{
	const isConn = useApp()
	if(isConn){
		return <>{children}</>
	}
	return <Loading/>
}

export default UwProvider

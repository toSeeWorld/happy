import React from "react";
import './index.scss'
interface PopupProps {
    visible:boolean
    onClose:Function
}
const Popup:React.FC<PopupProps> = (props)=>{
    return <div className="popup">
        here is popup 
    </div>
}
export default Popup
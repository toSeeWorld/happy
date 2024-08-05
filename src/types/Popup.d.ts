import React from "react";
export interface PopupProps {
    visible: boolean
    onClose: Function
}
declare const  Popup: React.FC<PopupProps>;
export default Popup
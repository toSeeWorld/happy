import React from "react";
import {createRoot} from "react-dom/client";
import { Alert } from "./src";
const App:React.FC<{}> = ()=>{
    return <div>
        test
        <Alert kind="negative">
            test
        </Alert>
    </div>
}
const container = document.getElementById('app') as HTMLElement;
const root = createRoot(container)
root.render(<App />)
import {useEffect, useRef, useState} from "react";

function App() {
    const begForLife = () => console.log("plz dont leave");
    useBeforeLeave(begForLife());
    return (
        <div className="App">
            <h1>hi</h1>
        </div>
    );
}

export default App;

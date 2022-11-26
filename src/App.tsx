import React from "react";
import "./App.scss";
import Loader from "./Components/Loader";

import Routing from "./Routing";

function App() {
    const [loading, setLoading] = React.useState(true);
    const loadingHandler = () => setLoading(false);
    setTimeout(loadingHandler, 2000);
    return <div className="App">{loading ? <Loader /> : <Routing />}</div>;
}

export default App;

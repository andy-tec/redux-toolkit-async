import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Content from "./body/content";

const FirstRouter = () => {
    return (
        <Router basename="/redux-toolkit-async">
            <Routes>
                <Route path="/" element={<Content />} />
            </Routes>
        </Router>
    );
};

export default FirstRouter;

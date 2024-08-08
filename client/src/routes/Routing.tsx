import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ViewLinks from "../pages/ViewLinks";
import EditLinks from "../pages/EditLinks";
import NotFound from "../pages/NotFound";

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/view-links" element={<ViewLinks />} />
            <Route path="/edit-links" element={<EditLinks />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default Routing;

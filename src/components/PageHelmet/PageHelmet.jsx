import { Helmet } from "react-helmet-async";

const PageHelmet = ({ pageName }) => {
    return (
        <Helmet>
            <title>FlavorFest || {pageName}</title>
        </Helmet>
    );
};

export default PageHelmet;
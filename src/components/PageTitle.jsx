import { Helmet } from "react-helmet-async";

const PageTitle = ({children}) => {
    return (
        <Helmet>
            <title>Lingos | {children}</title>
        </Helmet>
    );
};

export default PageTitle;
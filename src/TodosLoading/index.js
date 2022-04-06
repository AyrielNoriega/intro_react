import React from "react";
import ContentLoader from "react-content-loader";
import './TodosLoading.css';

function TodosLoading(props) {
    return <ContentLoader
                speed={2}
                width={506}
                height={300}
                viewBox="0 0 506 300"
                backgroundColor="#f3f3f3"
                foregroundColor="#c7c7c7"
                {...props}
            >

<rect x="1" y="28" rx="0" ry="0" width="500" height="75" /> 
<rect x="2" y="133" rx="0" ry="0" width="500" height="75" />
<rect x="2" y="233" rx="0" ry="0" width="500" height="75" />

            </ContentLoader>;
}

export {TodosLoading};
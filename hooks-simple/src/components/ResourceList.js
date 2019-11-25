import React from 'react';
import useResources from './useResources';

const ResourceList = ({ resource }) => {

    const resources = useResources(resource);

    const renderList = (resource) => <li key={resource.id}>{resource.title}</li>;

    return (
        <div>
            <ul>
                {resources.map((resource) => renderList(resource))}
            </ul>
        </div>
    );

    
}

export default ResourceList;
import React from 'react';
import './BannerDescription.scss';

function BannerDescription(props) {
    const { description } = props;

    const truncateString = (str, maxLength) => {
        return str?.length > maxLength ? str.slice(0, maxLength) + "..." : str;
    }

    return (
        <React.Fragment>
            <h2 className="BannerDescription">
                {truncateString(description, 150)}
            </h2>
        </React.Fragment>
    )
}

export default BannerDescription;

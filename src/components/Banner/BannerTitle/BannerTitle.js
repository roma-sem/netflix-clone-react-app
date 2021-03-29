import React from 'react';

function BannerTitle(props) {
    const { title } = props;

    return (
        <React.Fragment>
            <h1 className="BannerTitle">
                {title}
            </h1>
        </React.Fragment>
    )
}

export default BannerTitle;

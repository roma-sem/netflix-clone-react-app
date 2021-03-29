import React from 'react';
import './Avatar.scss';
import avatar from '../../../assets/images/user_avatar_400x400.png';

export default function Avatar() {
    return (
        <React.Fragment>
            <img className="Avatar" src={avatar} alt="avatar"/>
        </React.Fragment>
    )
}

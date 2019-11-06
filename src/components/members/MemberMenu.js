import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default class MemberMenu extends Component {
    render() {
        return (
            <div>
                <Link to="/members/intern">
                    intern
                </Link>
                <Link to="/members/">
                    members
                </Link>
                <Link to="/members/professor">
                    prof
                </Link>
            </div>
        )
    }
}

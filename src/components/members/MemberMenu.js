import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default class MemberMenu extends Component {
    render() {
        return (
            <div>
                <Link to="/members/intern">
                    intern
                </Link>
            </div>
        )
    }
}

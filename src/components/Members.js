import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class Members extends React.Component {
    render() {
        const cardStyle={
            margin:"0px 0px 0px 11%",
        }
        return (
            <Card style={cardStyle}>
                <CardContent>
                    Members
                </CardContent>
            </Card>
        );
    }
}

export default Members;
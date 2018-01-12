import * as React from "react";
import {Link} from "react-router-dom";
import Helmet from "react-helmet"

export interface Props {
    location: {
        hash: string,
        pathname: string,
        search: string,
        state: any
    },
    match: {
        isExact: boolean,
        params: any
        path: string,
        url: string
    }
}

class Visit extends React.Component<Props,{}> {
    render(){

        console.log(this.props);

        const {location,match} = this.props;

        return (
            <div>
                <Helmet>
                    <title>Visit</title>
                </Helmet>
                <h1>Visit</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/stuff">Stuff</Link></li>
                </ul>
            </div>
        )
    }
}

export default Visit;

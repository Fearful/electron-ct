import { Route } from "react-router-dom"
import * as React from "react";

import Home from "../common/components/Home"

import Visit from "../common/components/Visit"
import MyActivities from "../common/components/MyActivities"

import Helmet from "react-helmet";
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
import {Link} from "react-router-dom";

const linkStyles = {
    textAlign: 'center'
}
class Routes extends React.Component<{},{}> {
    state = {
      selectedIndex: 0,
    };

    select = (index: any) => this.setState({selectedIndex: index});
    
    render(){

        return ([
            <Helmet defaultTitle="Website" titleTemplate="%s | Website">
                <meta charSet="utf8"/>
            </Helmet>,
            <Route key="home" exact path="/" component={Home} />,
            // Patient Visit
            <Route key="visit" exact path="/visit/:a" component={Visit}/>,
            // User Activities
            <Route key="activities" exact path="/activities" component={MyActivities}/>,
            <Paper zDepth={1}>
                <BottomNavigation selectedIndex={1}>
                  <Link to="/" style={linkStyles}>
                  <BottomNavigationItem
                    label="-"
                    icon={recentsIcon}
                    onClick={() => this.select(0)}
                  />
                  </Link>
                  <Link to="/" style={linkStyles}>
                  <BottomNavigationItem
                    label="Home"
                    icon={favoritesIcon}
                    onClick={() => this.select(1)}
                  />
                  </Link>
                  <Link to="/activities" style={linkStyles}>
                  <BottomNavigationItem
                    label="My Activities"
                    icon={recentsIcon}
                    onClick={() => this.select(2)}
                  />
                  </Link>
                </BottomNavigation>
              </Paper>
        ])
    }
}

export default Routes;
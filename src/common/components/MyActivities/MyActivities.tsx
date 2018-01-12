import * as React from "react";
import {Link} from "react-router-dom";
import Helmet from "react-helmet";
import SwipeableViews from 'react-swipeable-views';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  tabs: {
    background: '#444444',
  },
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  }
};

export interface ActivitiesProps {}
export interface ActivitiesState {
    index: number;
}

class MyActivities extends React.Component<ActivitiesProps,ActivitiesState> {
    constructor(props: ActivitiesProps) {
        super(props);
        this.state = { index: 1 };
    }
    handleChange = (value:any, event: any) => {
        this.setState({
          index: value,
        });
    };

    handleChangeIndex = (index:number) => {
        this.setState({
          index,
        });
    };
    render(){

        const { index } = this.state;

        return (
            <div>
                <Helmet>
                    <title>CellTrak - My Activities</title>
                </Helmet>
                <Tabs value={index} onChange={this.handleChange} style={styles.tabs} initialSelectedIndex={1}>
                  <Tab label="Yesterday" />
                  <Tab label="Today" />
                  <Tab label="Tomorrow" />
                </Tabs>
                <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
                  <div style={Object.assign({}, styles.slide, {})}>
                                            <Card>
                        <CardHeader
                          title="Melton, Janette"
                          subtitle="Started at Jun 12 | 4:36 PM"
                          actAsExpander={true}
                          showExpandableButton={true}
                        />
                        <CardActions>
                          <FlatButton label="Resume" />
                          <FlatButton label="Reset" />
                        </CardActions>
                        <CardText expandable={true}>
                          Partner: Melton    |     Phone: (813) 689-5117
                        </CardText>
                      </Card>
                      <Card>
                        <CardHeader
                          title="Melton, Janette"
                          subtitle="Started at Jun 12 | 4:36 PM"
                          actAsExpander={true}
                          showExpandableButton={true}
                        />
                        <CardActions>
                          <FlatButton label="Resume" />
                          <FlatButton label="Reset" />
                        </CardActions>
                        <CardText expandable={true}>
                          Partner: Melton    |     Phone: (813) 689-5117
                        </CardText>
                      </Card>
                      <Card>
                        <CardHeader
                          title="Melton, Janette"
                          subtitle="Started at Jun 12 | 4:36 PM"
                          actAsExpander={true}
                          showExpandableButton={true}
                        />
                        <CardActions>
                          <FlatButton label="Resume" />
                          <FlatButton label="Reset" />
                        </CardActions>
                        <CardText expandable={true}>
                          Partner: Melton    |     Phone: (813) 689-5117
                        </CardText>
                      </Card>
                  </div>
                  <div style={Object.assign({}, styles.slide, {})}>
                      <Card>
                        <CardHeader
                          title="Melton, Janette"
                          subtitle="Started at Jun 12 | 4:36 PM"
                          actAsExpander={true}
                          showExpandableButton={true}
                        />
                        <CardActions>
                          <FlatButton label="Resume" />
                          <FlatButton label="Reset" />
                        </CardActions>
                        <CardText expandable={true}>
                          Partner: Melton    |     Phone: (813) 689-5117
                        </CardText>
                      </Card>
                      <Card>
                        <CardHeader
                          title="Melton, Janette"
                          subtitle="Started at Jun 12 | 4:36 PM"
                          actAsExpander={true}
                          showExpandableButton={true}
                        />
                        <CardActions>
                          <FlatButton label="Resume" />
                          <FlatButton label="Reset" />
                        </CardActions>
                        <CardText expandable={true}>
                          Partner: Melton    |     Phone: (813) 689-5117
                        </CardText>
                      </Card>
                      <Card>
                        <CardHeader
                          title="Melton, Janette"
                          subtitle="Started at Jun 12 | 4:36 PM"
                          actAsExpander={true}
                          showExpandableButton={true}
                        />
                        <CardActions>
                          <FlatButton label="Resume" />
                          <FlatButton label="Reset" />
                        </CardActions>
                        <CardText expandable={true}>
                          Partner: Melton    |     Phone: (813) 689-5117
                        </CardText>
                      </Card>
                  </div>
                  <div style={Object.assign({}, styles.slide, {})}>
                                            <Card>
                        <CardHeader
                          title="Melton, Janette"
                          subtitle="Started at Jun 12 | 4:36 PM"
                          actAsExpander={true}
                          showExpandableButton={true}
                        />
                        <CardActions>
                          <FlatButton label="Resume" />
                          <FlatButton label="Reset" />
                        </CardActions>
                        <CardText expandable={true}>
                          Partner: Melton    |     Phone: (813) 689-5117
                        </CardText>
                      </Card>
                      <Card>
                        <CardHeader
                          title="Melton, Janette"
                          subtitle="Started at Jun 12 | 4:36 PM"
                          actAsExpander={true}
                          showExpandableButton={true}
                        />
                        <CardActions>
                          <FlatButton label="Resume" />
                          <FlatButton label="Reset" />
                        </CardActions>
                        <CardText expandable={true}>
                          Partner: Melton    |     Phone: (813) 689-5117
                        </CardText>
                      </Card>
                      <Card>
                        <CardHeader
                          title="Melton, Janette"
                          subtitle="Started at Jun 12 | 4:36 PM"
                          actAsExpander={true}
                          showExpandableButton={true}
                        />
                        <CardActions>
                          <FlatButton label="Resume" />
                          <FlatButton label="Reset" />
                        </CardActions>
                        <CardText expandable={true}>
                          Partner: Melton    |     Phone: (813) 689-5117
                        </CardText>
                      </Card>
                  </div>
                </SwipeableViews>

            </div>
        )
    }
}

export default MyActivities;
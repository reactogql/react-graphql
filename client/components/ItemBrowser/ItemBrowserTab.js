import React, { Component } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";

class ItemBrowserTab extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <Nav tabs className="tab-navs">
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              Lorem Ipsum
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              Quisque
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1" className="tab-pane">
            <br />
            <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle>Donec cursus tortor sit</CardTitle>
                  <CardText>
                    Sed tincidunt, eros purus tempor quam, auctor imperdiet dui
                    diam non erat. Donec cursus tortor sit amet molestie tempus.
                  </CardText>
                  <Button>Sed tincidunt</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle>Phasellus eu pulvinar lectus</CardTitle>
                  <CardText>
                    Fusce consequat interdum nulla, non suscipit erat finibus
                    vel. Nulla aliquam placerat arcu eget dignissim.
                  </CardText>
                  <Button>Proin maximus</Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <div className="tab1">
                  <h4>Phasellus convallis</h4>
                  <p>
                    Proin maximus mauris porta orci lacinia, quis tincidunt
                    tellus tempus. Fusce non turpis in nisl pulvinar lobortis
                    sit amet id enim. Phasellus eu pulvinar lectus. Fusce
                    consequat interdum nulla, non suscipit erat finibus vel.
                    Nulla aliquam placerat arcu eget dignissim. Sed tincidunt,
                    erat at convallis blandit, eros purus tempor quam, auctor
                    imperdiet dui diam non erat. Donec cursus tortor sit amet
                    molestie tempus.
                  </p>
                </div>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
export default ItemBrowserTab;

import React from "react";
import "./ItemBrowser.css";
// import Numeral from "numeral";
import { NavLink as RRNavLink } from "react-router-dom";
import ItemBrowserTab from "./ItemBrowserTab";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  NavLink
} from "reactstrap";

const itemData = [
  {
    detailKey: 1,
    thumbnail: "/images/cars/tn/car1_tn.jpg",
    altText: "AJ-756 car",
    title: "AJ-756",
    subtitle: "High-poly",
    text: "Polished high-poly 3D car, fully textured"
  },
  {
    detailKey: 2,
    thumbnail: "/images/cars/tn/car2_tn.jpg",
    altText: "TS-847 car",
    title: "TS-847",
    subtitle: "Animated item",
    text: "Ready to drag-drop to game engine and animate"
  },
  {
    detailKey: 3,
    thumbnail: "/images/cars/tn/car3_tn.jpg",
    altText: "HP-285s car",
    title: "HP-285s",
    subtitle: "PBR material",
    text: "Flexible model, different sizes available, fully textured"
  },
  {
    detailKey: 4,
    thumbnail: "/images/cars/tn/car4_tn.jpg",
    altText: "XM-932 car",
    title: "XM-932",
    subtitle: "High speed",
    text: "Assembled with speed in mind, best for race games"
  }
];
class ItemBrowser extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const SelectedItems = itemData.map(item => {
      return (
        <Col key={item.detailKey + "vb"} md={Math.ceil(12 / itemData.length)}>
          <Card>
            <CardImg top width="100%" src={item.thumbnail} alt={item.altText} />
            <CardBody>
              <CardTitle>{item.title}</CardTitle>
              <CardSubtitle>{item.subtitle}</CardSubtitle>
              <CardText>{item.text}</CardText>
              <NavLink to={"/detail/" + item.detailKey} tag={RRNavLink}>
                <i className="fas fa-info-circle" /> Details
              </NavLink>
            </CardBody>
          </Card>
        </Col>
      );
    }, this);
    return (
      <div className="ItemBrowser">
        <Container>
          <div className="ItemBrowserCards">
            <Row>{SelectedItems}</Row>
          </div>
          <ItemBrowserTab />
        </Container>
      </div>
    );
  }
}

export default ItemBrowser;

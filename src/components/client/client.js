import React, { Component } from "react";
import "./admin.css";
import Navbar from "./navbar/navbar";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

import { connect } from "react-redux";
import { getMenuData } from "../../actions/clientActionCreator";

export class Client extends React.Component {
  /*****************************get the menu from axios******* */
  componentDidMount() {
    this.props.getMenu();
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="admin">
          <div className="card-group">
            {this.props.menu.map((el) => (
              <div className="carta">
                <Card style={{ width: "18rem" }} key={el.id}>
                  <img className="imaja" src={el.image} alt="Card image cap" />
                  <CardBody>
                    <CardTitle>{el.title}</CardTitle>
                    <CardText>{el.description}</CardText>
                    <CardSubtitle>Prix: {el.price} TND</CardSubtitle>
                  </CardBody>
                  <button>commander</button>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  menu: state.meal,
});
const mapDispatchToProps = (dispatch) => ({
  getMenu: () => dispatch(getMenuData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Client);

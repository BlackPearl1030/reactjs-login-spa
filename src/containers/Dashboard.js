import React, { Component } from "react";
import { retrieveServersData } from "../api/servers";
import { connect } from "react-redux";
import { setServers } from "../actions/servers.actions";
import { handleError } from "../api";
import Content from "../components/Content";
import { Header } from "../components/Header";
import * as msg from '../constants/constants';
import { Loader } from "../components/Loader";
import { ROUTES } from "../constants/routes";

class Dashboard extends Component {

  state = {
    isLoading: false,
  };

  componentDidMount() {
    const loggedIn = localStorage.getItem("token");
    console.log('token',localStorage.getItem("token"));
    if (!loggedIn) {
      this.props.history.push(`${ROUTES.LOGIN}`);
    } else {
      this.loadData();
    }
  }
  

  loadData() {
    this.setState({ isLoading: true });
    retrieveServersData()
      .then((res) => {
        if (res && res.data) {
          this.props.setServers(res.data);
        }
      })
      .catch((error) => {
        handleError(error.response, msg.DATA_LOAD_FAILED);
      })
      .finally(() => this.setState({ isLoading: false }));
  }

  handleLogout() {
    localStorage.removeItem("token");
    this.props.setUserLogout();
    this.props.history.push(`${ROUTES.LOGIN}`);
  }

  
  render() {
    const { isLoading } = this.state;
    const { servers } = this.props;

    return (
      <div className="server-list-page">
        {isLoading && <Loader />}
        <Header logout={() => this.handleLogout()} />
        <Content items={servers} />
      </div>
    );
  }
}

function bindActions(dispatch) {
  return {
    setServers: (data) => dispatch(setServers(data)),
    setUserLogout: () => dispatch({ type: msg.SET_USER_LOGOUT }),
  };
}

const mapStateToProps = (state) => ({
  servers: state.servers,
});

export default connect(mapStateToProps, bindActions)(Dashboard);
/* eslint react/prop-types: 0 */
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// eslint-disable-next-line import/no-unresolved
import { ActionCreators } from "../actions/";

export default function commonContainer(ComposedComponent) {
  class commonContainer extends React.Component {
    constructor(props) {
      super(props);
    }
    componentDidMount() {

    }
    render() {
      return <ComposedComponent {...this.props}  />;
    }
  }
  function mapStateToProps(state) {
    let prop = {
      commonReducer: state.commonReducer,
    };

    return prop;
  }

  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(ActionCreators(), dispatch),
    };
  }
  return connect(mapStateToProps, mapDispatchToProps)(commonContainer);
}
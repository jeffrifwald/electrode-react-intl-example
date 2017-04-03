import React, {PropTypes} from "react";
import {connect} from "react-redux";
/**/
import {toggleCheck, incNumber, decNumber} from "../actions";
import Welcome from "./welcome";

import "intl";
import "intl/locale-data/jsonp/en";
import {IntlProvider, addLocaleData} from "react-intl";

const locale = "en";
const messages = require(`../lang/${locale}.json`);
const localeData = require(`react-intl/locale-data/${locale}`);

addLocaleData(localeData);

class Home extends React.Component {
  render() {
    const props = this.props;
    const {checked, value} = props;
    return (
      <IntlProvider locale={locale} messages={messages}>
        <div>
          <Welcome />
          <h1>Hello <a href={"https://github.com/electrode-io"}>{"Electrode"}</a></h1>
          <div>
            <h2>Managing States with Redux</h2>
            <label>
              <input onChange={props.onChangeCheck} type={"checkbox"} checked={checked}/>
              Checkbox
            </label>
            <div>
              <button type={"button"} onClick={props.onDecrease}>-</button>
              &nbsp;{value}&nbsp;
              <button type={"button"} onClick={props.onIncrease}>+</button>
            </div>
          </div>
        </div>
      </IntlProvider>
    );
  }
}

Home.propTypes = {
  checked: PropTypes.bool,
  value: PropTypes.number.isRequired
};

const mapStateToProps = (state) => {
  return {
    checked: state.checkBox.checked, value: state.number.value
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeCheck: () => {
      dispatch(toggleCheck());
    },
    onIncrease: () => {
      dispatch(incNumber());
    },
    onDecrease: () => {
      dispatch(decNumber());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

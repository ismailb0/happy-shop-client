import React from 'react';
import ReactDOM from 'react-dom';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import './Dropdown.css';

class Dropdown extends React.Component {
  state = {
    value: this.props.defaultItem.value,
    labelWidth: 100,
  };

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  getDropdownItems = () => {
    return (
      this.props.items.map((item) => {
        return (<MenuItem key={item.label} value={item.value}>{item.label}</MenuItem>);
      })
    );
  }

  render() {
    return (
      <form autoComplete="off" >
        <FormControl variant="outlined" >
          <div className="label-dropdown-wrapper">
            <div className="label">
              {`${this.props.inputLabel} :`}
            </div>
            <InputLabel
              ref={ref => {
                this.InputLabelRef = ref;
              }}
              htmlFor="outlined-age-simple"
            >
            </InputLabel>
            <Select
              value={this.state.value}
              onChange={this.handleChange}
              input={
                <OutlinedInput
                  labelWidth={this.state.labelWidth}
                  name="value"
                  id="outlined-age-simple"
                />
              }
            >
              {this.getDropdownItems()}
            </Select>
          </div>
        </FormControl>
      </form>
    );
  }
}

export default Dropdown;

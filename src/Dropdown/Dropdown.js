import React from 'react';
import ReactDOM from 'react-dom';
import { withStyles } from "@material-ui/core/styles";

import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import './Dropdown.css';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width: 140
  }
};

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

  handleSelectChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    this.props.handleChange(event.target.value)
  };

  getDropdownItems = () => {
    return (
      this.props.items.map((item) => {
        return (<MenuItem key={item.label} value={item.value}>{item.label}</MenuItem>);
      })
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <form autoComplete="off">
        <FormControl variant="outlined">
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
              className={classes.root}
              value={this.state.value}
              onChange={this.handleSelectChange}
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

export default withStyles(styles)(Dropdown);

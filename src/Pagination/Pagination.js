import React, { Component, Fragment } from 'react';

import './Pagination.css';

class Pagination extends Component {

  state = {
    currentPage: this.props.page,
    numbersToDisplay: [],
    pageNumbers: []
  };

  componentWillReceiveProps(nextProps) {
    const pageNumbers = this.getPageNumbers(nextProps.totalNumberOfProducts, nextProps.resultsPerPage)
    this.updateNumbersToDisplay(pageNumbers, this.state.currentPage)
    if (nextProps.page !== this.props.page) {
      this.setState({
        currentPage: nextProps.page
      })
    }
  }

  handleClick = (value) => {
    this.props.handlePageChange(value)
    this.setState({ currentPage: value }, () => this.updateNumbersToDisplay(
      this.state.pageNumbers,
      value
    ));
  }

  getNumber = (number) => {
    return (
      <div
        className={(number === this.state.currentPage) ? 'number selected' : 'number'}
        key={number}
        id={number}
        onClick={(event) => this.handleClick(parseInt(event.target.id))}
      >
        {number}
      </div>
    );
  }

  getNumberWithEllipsis = (number) => {
    return (
      <Fragment key={number}>
        <div className='number'>...</div>
        <div
          className={(number === this.state.currentPage) ? 'number selected' : 'number'}
          key={number}
          id={number}
          onClick={(event) => this.handleClick(parseInt(event.target.id))}
        >
          {number}
        </div>
      </Fragment>
    );
  }

  updateNumbersToDisplay = (pageNumbers, currentPage) => {
    const firstPage = pageNumbers[0]
    const [ lastPage ] = pageNumbers.slice(-1)

    let numbersToDisplay = [firstPage]

    if (currentPage > firstPage && currentPage < lastPage) {
      numbersToDisplay.push(currentPage - 1)
      numbersToDisplay.push(currentPage)
      numbersToDisplay.push(currentPage + 1)
    } else if (currentPage === firstPage) {
      numbersToDisplay.push(currentPage)
      numbersToDisplay.push(currentPage + 1)
      numbersToDisplay.push(currentPage + 2)
    } else if (currentPage === lastPage) {
      numbersToDisplay.push(currentPage - 2)
      numbersToDisplay.push(currentPage - 1)
      numbersToDisplay.push(currentPage)
    }

    numbersToDisplay.push(lastPage)

    // Remove duplicates
    numbersToDisplay = numbersToDisplay.filter((value,index) => numbersToDisplay.indexOf(value) === index)

    // Remove out of bounds values
    numbersToDisplay = numbersToDisplay.filter((value, index) => (value <= lastPage && value >= firstPage))

    this.setState({ numbersToDisplay })
  }

  getPageNumbers = (totalNumberOfProducts, resultsPerPage) => {
    const pageNumbers = [];
    const numberOfPages = Math.ceil(totalNumberOfProducts / resultsPerPage)
    for (let i = 1; i <= numberOfPages; i++) {
      pageNumbers.push(i);
    }
    this.setState({ pageNumbers });
    return pageNumbers
  }

  render() {
    const { numbersToDisplay } = this.state

    return (
      <div className='pagination'>
        {
          numbersToDisplay.map((element, index) => {
            if (index > 0 && element !== numbersToDisplay[index - 1] + 1) {
              return this.getNumberWithEllipsis(element)
            } else {
              return this.getNumber(element)
            }
          })
        }
      </div>
    );
  }
}

export default Pagination;

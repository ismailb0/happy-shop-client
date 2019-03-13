import React, { Component, Fragment } from 'react';

import './Pagination.css';

class Pagination extends Component {

  state = {
      currentPage: 1,
    };

  getNumber = (number) => {
    return (
      <div
        className='number'
        key={number}
        id={number}
        onClick={this.handleClick}
      >
        {number}
      </div>
    );
  }

  getNumberWithEllipsis = (number) => {
    return (
      <Fragment>
        <div className='number'>...</div>
        <div
          className='number'
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </div>
      </Fragment>
    );
  }

  getNumbersToDisplay = (pageNumbers, currentPage) => {
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
    return numbersToDisplay
  }

  render() {
    const { currentPage } = this.state;

    const pageNumbers = [];
    for (let i = 1; i <= 6; i++) {
      pageNumbers.push(i);
    }

    const numbersToDisplay = this.getNumbersToDisplay(pageNumbers, currentPage)

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

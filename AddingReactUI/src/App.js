import React, { Component } from 'react';

class App extends Component {
  state = {
    dataset: [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5],
    results: null
  }


  linearSearch(array, value, counter) {
    for(let i = 0; i < array.length; i++) {
      counter = i + 1;
      if (array[i] == value) {
        return counter;
      }
    }
    return `Was not found within ${counter} searches`;
  }

  binarySearch(arr, value, start, end, counter) {
    console.log(arr)
    var start = start === undefined ? 0 :start;
    var end = end === undefined ? arr.length : end;
    counter = counter + 1;

    if (start > end) {
      return `Item not found within ${counter} searches`;
    }

    const index = Math.floor((start + end) / 2);
    const item = arr[index];

    console.log(arr[start], arr[end]);
    console.log(item)
    console.log(counter)
    if (item == value) {
      return counter;
    }
    else if (item < value) {
      return this.binarySearch(arr, value, index + 1, end, counter);
    }
    else if (item > value) {
      return this.binarySearch(arr, value, start, index - 1, counter);
    }
  }

  handleSubmit = (e, counter) => {
    e.preventDefault();
    // let result = this.linearSearch(this.state.dataset, e.target.elements[0].value, counter)
    let arr = this.state.dataset.sort((a, b) => a - b);
    let result = this.binarySearch(arr, e.target.elements[0].value, undefined, undefined, counter = 0)
    this.setState({
      results: result
    })
  }

  render() {
    let counter = 0;
    return (
      <main className='App'>
        <form onSubmit={(e) => this.handleSubmit(e, counter)} className='search-field'>
          <input type='number' className='search-input'></input>
          <button type='submit'>Search</button>
        </form>
        <section className='results'>
          <p>{this.state.results}</p>
        </section>
      </main>
    );
  }
}

export default App;

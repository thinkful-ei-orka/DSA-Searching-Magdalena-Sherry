import React, { Component } from 'react';

class App extends Component {
  state = {
    dataset: [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5],
    searched: false,
    results: null
  }


  linearSearch(array, value, counter) {
    console.log(array);
    console.log(value);
    for(let i = 0; i < array.length; i++) {
      if (array[i] == value) {
        counter = i + 1;
        console.log(counter);
        return counter;
      }
    }
    this.setState({
      searched: true
    })
    return 'Was not found';
  }

  handleSubmit = (e, counter) => {
    console.log(e.target.elements[0].value);
    e.preventDefault();
    console.log(this.linearSearch(this.state.dataset, e.target.elements[0].value, counter));
    let result = this.linearSearch(this.state.dataset, e.target.elements[0].value, counter)
    this.setState({
      results: result
    })
  }

  render() {
    const { searched } = this.state.searched;
    let counter = 0;
    console.log(this.state.results);
    return (
      <main className='App'>
        <form onSubmit={(e) => this.handleSubmit(e, counter)} className='search-field'>
          <input type='number' className='search-input'></input>
          <button type='submit'>Search</button>
        </form>
        <section className='results'>
          {searched && <p>{this.state.results}</p>}
        </section>
      </main>
    );
  }
}

export default App;

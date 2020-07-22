const BinarySearchTree = require('./BinarySearchTree');

//1. How many searches?

// 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 -- length: 10 / 2 => [5]
// is 11 < or > or = 8?
// 3, 5, 6, 8 -- length: 4 / 2 => [2]
// is 5 < > = 8?
// 6, 8 -- length 2 / 2 => [1]
// is 6 < > = 8?
// 8 === 8 ! We found it!!
// 4 steps in total to find 8!

// 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 -- length: 10 / 2 => [5]
// is 11 <>= 16?
// 12, 14, 15, 17, 18 -- length: 5 / 2 => [2]
// is 14 < > = 16?
// 15, 17, 18 -- length: 3 / 2 => [1]
// is 15 < > = 16? 
// 17, 18 -- length: 2 / 2 => [1]
// is 17 < > = 16?
// there is no 16 in this array

//3. Find a book

const library = [
  { author: 'Cowlishaw, Mike', dewey: '005.133', title: 'The REXX Language' },
  { author: 'Sams', dewey: '005.133', title: 'Teach Yourself C++ In 21 Days' },
  { author: 'Stroustrup., Bjarne', dewey: '005.133', title: 'The C++ Programming Language' },
  { author: 'Crockford, Douglas', dewey: '005.2762', title: 'JavaScript: The Good Parts' },
  { author: 'Flanagan, David', dewey: '005.2762', title: 'JavaScript: The Definitive Guide' },
  { author: 'Schmidt, Meinhard', dewey: '005.44684', title: 'Windows Vista for Dummies' },
  { author: 'Zondervan', dewey: '220.52081', title: 'NIV Study Bible' },
  { author: 'Humphries, Russell, Dr.', dewey: '231.7652', title: 'Starlight and Time' },
  { author: 'Jane, Frederick Thomas', dewey: '623.82509051', title: 'Jane\'s Fighting Ships' },
  { author: 'Norris, Chuck', dewey: '796.8092', title: 'The Official Chuck Norris Fact Book' }
];

let deweyNums = library.map(book => book.dewey);
let titles = library.map(book => book.title);

let value = "005.2762"
let title = 'JavaScript: The Good Parts';


function binarySearch(array, value, start, end, titles, title) {
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? array.length : end;

  if (start > end) {
    return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];

  console.log(start, end);
  if (item == value) {
    if (titles[index] == title) {
      return index;
    }
  }
  else if (item < value) {
    return binarySearch(array, value, index + 1, end, titles, title);
  }
  else if (item > value) {
    return binarySearch(array, value, start, index - 1, titles, title);
  }
};

// console.log(binarySearch(deweyNums, value, undefined, undefined, titles, title));

//4. 
// a) postorder traveral: 14, 19, 15, 27, 25, 79, 90, 91, 89, 35
// b) pre-order: 8, 6, 5, 7, 10, 9, 11

//5. Implement differenet tree traversals

let BST = new BinarySearchTree();

BST.insertion(25);
BST.insertion(15);
BST.insertion(50);
BST.insertion(10);
BST.insertion(24);
BST.insertion(35);
BST.insertion(70);
BST.insertion(4);
BST.insertion(12);
BST.insertion(18);
BST.insertion(31);
BST.insertion(44);
BST.insertion(66);
BST.insertion(90);
BST.insertion(22);

BST.inOrder();
BST.preOrder();
BST.postOrder();
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

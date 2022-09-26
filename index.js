// Coding Challenge #1: Basketball Score

const totalBasketballScore = ((freeThrows, midRange, threePointers) => {
  if (typeof freeThrows === 'number' && typeof midRange === 'number' && typeof threePointers === 'number') {
    return freeThrows * 1 + midRange * 2 + threePointers * 3
  } else {
    return 'Please using number'
  }
}

)

console.log(totalBasketballScore(2, 3, 4))
console.log(totalBasketballScore('2', 3, 4))

// Coding Challenge #2: Computer Store
const itemPrice = (item) => {
  switch (item) {
    case 'computer':
      return '$500';
      break;
    case 'mouse':
      return '$10';
      break;
    case 'tablet':
      return '$250';
      break;
    case 'case':
      return '$25';
      break;
    case 'router':
      return '$100';
      break;
    default:
      return 'Please check and type correct item'
  }
}
console.log(itemPrice('case'))
console.log(itemPrice('casse'))



// Coding Challenge #3: What’s for dinner?

const restaurants = ['Applebees', 'Panera Bread', 'Popeyes', 'Chopt', 'Chick-fil-A', 'Cheesecake Factory', 'Five Guys'];

const randomRestaurant = numOfRestaurants => {
  let randomRestaurantList = [];
``
  let randomNumber = () => Math.floor(Math.random() * numOfRestaurants.length)

  let i = 0;

  while (i < 3) {
    randomRestaurantList.push(numOfRestaurants[randomNumber()]);
    i++
  }

  return randomRestaurantList
}

console.log(randomRestaurant(restaurants))

// Coding Challenge #4: Leap Year

const isLeapYear = year => {
  if (year % 4 === 0) {
    if (year % 400 === 0) {
      return true
    } else if (year % 100 === 0) {
      return false
    } else {
      return true
    }
  } else {
    return false
  }
}

console.log(isLeapYear(2001))
console.log(isLeapYear(1700))

const userData = {
  "userSungjun": {
    userId: "userSungjun",
    name: "sungjun",
    age: 50,
    location: {
      country: "Canada",
      province: "Ontario",
      address: "A apartment",
      movingHistory: [
        {
          from: {
            country: "Canada",
            province: "Ontario",
            address: "B apartment",
          },
          to: {
            country: "Canada",
            province: "Ontario",
            address: "C apartment",
          },
          year: 2019
        },
        {
          from: {
            country: "Korea",
            province: "Seoul",
            address: "D apartment",
          },
          to: {
            country: "Canada",
            province: "Ontario",
            address: "E apartment",
          },
          year: 2018
        }
      ]
    },
    relationship: ["userTerry", "userTom"]
  },
  "userTerry": {
    userId: "userTerry",
    name: "terry",
    age: 100,
    location: {
      country: "Canada",
      province: "Ontario",
      address: "F apartment",
      movingHistory: [
        {
          from: {
            country: "Canada",
            province: "Ontario",
            address: "G apartment",
          },
          to: {
            country: "Canada",
            province: "Ontario",
            address: "H apartment",
          },
          year: 2016
        },
        {
          from: {
            country: "Korea",
            province: "Seoul",
            address: "I apartment",
          },
          to: {
            country: "Canada",
            province: "Ontario",
            address: "J apartment",
          },
          year: 2011
        }
      ]
    },
    relationship: ["userSungjun"]
  },
  "userTom": {
    userId: "userTom",
    name: "tom",
    age: 150,
    location: {
      country: "Canada",
      province: "Ontario",
      address: "K apartment",
      movingHistory: [
        {
          from: {
            country: "Canada",
            province: "Ontario",
            address: "L apartment",
          },
          to: {
            country: "Canada",
            province: "quebec",
            address: "M apartment",
          },
          year: 2014
        },
        {
          from: {
            country: "Korea",
            province: "Seoul",
            address: "N apartment",
          },
          to: {
            country: "Canada",
            province: "Ontario",
            address: "O apartment",
          },
          year: 2009
        }
      ]
    },
    relationship: ["userSungjun"]
  },
};

// 1.userTerry - location - movingHistory 0?????? ????????? ?????? ?????????. Done
// 2.userTerry - location - movingHistory ??? ?????? ?????????. pending
// 3.userTerry - location - movingHistory ?????? from??? Seoul??? address??? ?????????. done
// 4.userSungjun??? relationship??? ???????????? ??? ?????? user??? ???????????? ?????????. done
// 5.?????? ???????????? location - movingHistory 0?????? ???????????? from ???????????? ?????????. done
// 6.????????? object??? ?????????, ?????? object?????? userTerry??? value??? ?????????. 
// 7.????????? object??? ?????????, ?????? object?????? userTerry??? location - movingHistory ????????? ?????????.

// console.log(userData.userTerry.location.movingHistory[0])

// userData.userTerry.location.movingHistory.map((element) => {
//   console.log(element)
// })

// console.log(userData.userTerry.location.movingHistory[1]['from']['address'])

// console.log(userData.userSungjun.relationship)
// console.log(userData.userTerry.relationship)
// console.log(userData.userTom.relationship)

// console.log(userData.userSungjun.location.movingHistory[0].from);

const favouriteColors = {
  homeColor: 'blue',
  carColor: 'yellow',
  computerColor: 'black'
}

Object



// console.log(userData[userData['userTerry']['relationship'][0]]);


// ????????? userTom??????, ??? ????????? location - movingHistory ?????? ???
// to ?????? address??? M aparment????????? province??? ?????????. (quebec)

// Object.entries(userData).forEach((user, index) => {
//   if(user[0] === "userTom") {
//     user[1]['location']['movingHistory'].forEach((moving, index) => {
//       if(moving['to'].address === "M apartment") {
//         console.log(moving['to'].province)
//       }
//     })
//   }
// })


// let datas = {
//   "aa": "AA",
//   "bb": "BB"
// };

// console.log(Object.entries(datas).map((element, index) => {
//   console.log(element[1]);
// }));


// console.log(userData.userTom.location.movingHistory[0].to.address)
// console.log(userData['userTom']['location']['movingHistory'][0]['to']['address'])

// Object.entries(userData).map((element) => {
//   console.log(element[1]);
// });

// console.log(Object.values(userData));



// console.log(Object.keys(userData.userSungjun.location.province))
// console.log(Object.keys(userData.userTom.location.movingHistory.))
// console.log(Object.values(userData).userTom.relationship)
// console.log(Object.entries(userData))

// const ages = [3, 10, 18, 20];

const terrydata = [
  {
    name: 'TAEHWAN',
    age: 10,
    fruit: 'banana'
  },
  {
    name: 'TERRY',
    age: 20,
    fruit: 'orange'
  },
  {
    name: 'DWAINE',
    age: 30,
    fruit: 'lemon'
  }
]


// terrydata.map((person, index) => {
//   if (person.fruit === 'orange') {
//     console.log(person.name)
//   }
// })

// terrydata.map((person, index) => {
//   if (person.name === 'TAEHWAN') {
//     console.log(person.age)
//   }
// })

// terrydata.map((person, index) => {
//   if (person.age === 30) {
//     console.log(person.fruit)
//   }
// })

// const sungjun = {
//   name: "sung",
//   age: 31,
//   fruit: 'banana'
// }

// // terry ?????? ?????? ????????? age??? 10??? fruit??? data??? ???????????????.

// terry.map((element, index) => {
//     return element.fruit
// });

// terry.forEach((element, index) => {
//   if (element.age === 10) {
//     return element.fruit;
//   } 
// });

// let numberArray = [1, 2, 3, 4, 5];

// let returnValue = numberArray.map((num) => num *2).map((num) => num.toString()).map((string) => '$'+string)

// console.log(returnValue)
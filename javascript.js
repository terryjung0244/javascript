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

// userTerry - location - movingHistory 0번째 인덱스 값을 뽑아라.
// userTerry - location - movingHistory 각 값을 뽑아라.
// userTerry - location - movingHistory 에서 from이 Seoul인 address를 뽑아라.
// userSungjun의 relationship을 확인해서 각 다른 user의 데이터를 뽑아라.
// 해당 데이터의 location - movingHistory 0번째 인덱스의 from 데이터를 뽑아라.
// 새로운 object를 만들고, 해당 object안에 userTerry의 value를 넣어라.
// 새로운 object를 만들고, 해당 object안에 userTerry의 location - movingHistory 배열을 넣어라.

console.log(userData.userTom.location.movingHistory[1].to.province)
console.log(userData.userTom.location.movingHistory[1]['to']['province'])


// console.log(userData[userData['userTerry']['relationship'][0]]);


// 키값이 userTom이고, 그 안에서 location - movingHistory 배열 중
// to 안에 address가 M aparment인것의 province를 찾아라. (quebec)

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

// // terry 배열 변수 안에서 age가 10인 fruit의 data를 뽑아주세요.

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
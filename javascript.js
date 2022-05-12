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
    relationship: ["userTom"]
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
            province: "Ontario",
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
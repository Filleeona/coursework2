import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  pets: [],
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    fetchPets: (state) => {
      state.pets = [{
        isAdopted: true,
        type: 'dog',
        color: 'white',
        age: 15,
        size: "big",
        name: "Doggy",
        description: "Very cool doggy",
        photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2016/10/24162539/Samoyed-standing-on-a-path-in-the-forest.jpg"
      },
        {
          isAdopted: false,
          type: 'cat',
          color: 'black',
          age: 5,
          size: "small",
          name: "Whiskers",
          description: "Adorable and playful cat",
          photo: "https://www.thesprucepets.com/thmb/eMYmVz9L8HtDneY1O8pdhG5rp0c=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/portrait-of-cat--close-up-500962797-57eac66b5f9b586c35c5da67.jpg"
        },
        {
          isAdopted: false,
          type: 'dog',
          color: 'brown',
          age: 3,
          size: "medium",
          name: "Rex",
          description: "Friendly and energetic dog",
          photo: "https://www.example.com/dog-photo.jpg"
        },
        {
          isAdopted: true,
          type: 'cat',
          color: 'gray',
          age: 2,
          size: "small",
          name: "Whiskers",
          description: "Shy but affectionate cat",
          photo: "https://www.example.com/cat-photo.jpg"
        },
        {
          isAdopted: false,
          type: 'dog',
          color: 'black',
          age: 7,
          size: "medium",
          name: "Shadow",
          description: "Playful and loyal dog",
          photo: "https://www.example.com/dog-shadow.jpg"
        },
        {
          isAdopted: false,
          type: 'cat',
          color: 'orange',
          age: 1,
          size: "small",
          name: "Garfield",
          description: "Charming and mischievous cat",
          photo: "https://www.example.com/cat-garfield.jpg"
        },
        {
          isAdopted: true,
          type: 'dog',
          color: 'white',
          age: 4,
          size: "large",
          name: "Snowball",
          description: "Gentle and loving dog",
          photo: "https://www.example.com/dog-snowball.jpg"
        },
        {
          isAdopted: false,
          type: 'cat',
          color: 'black',
          age: 3,
          size: "medium",
          name: "Midnight",
          description: "Independent and curious cat",
          photo: "https://www.example.com/cat-midnight.jpg"
        },
        {
          isAdopted: true,
          type: 'dog',
          color: 'brown',
          age: 6,
          size: "small",
          name: "Buddy",
          description: "Energetic and loyal companion",
          photo: "https://www.example.com/dog-buddy.jpg"
        },
      ]
    },
  },
})

export const {fetchPets} = appSlice.actions

export default appSlice.reducer
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
        age: 85,
        size: "big",
        name: "Doggy",
        description: "Very cool doggy",
        photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2016/10/24162539/Samoyed-standing-on-a-path-in-the-forest.jpg"
      }]
    },
  },
})

export const {fetchPets} = appSlice.actions

export default appSlice.reducer
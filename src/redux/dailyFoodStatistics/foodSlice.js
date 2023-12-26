import { createSlice } from '@reduxjs/toolkit';
import { addFood, deleteFood, getFood, updateFood } from './foodOperations';

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleAddFoodFullfiled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.consumedFood.totalCalories = action.payload?.totalCalories;
  state.consumedFood.totalCarbs = action.payload?.totalCarbs;
  state.consumedFood.totalProtein = action.payload?.totalProteins;
  state.consumedFood.totalFat = action.payload?.totalFats;

  switch (action.meta.arg.typeFood) {
    case 'breakfast':
      state.consumedFood.breakfast = action.payload.breakfast;
      break;
    case 'dinner':
      state.consumedFood.dinner = action.payload.dinner;
      break;
    case 'lunch':
      state.consumedFood.lunch = action.payload.lunch;
      break;
    case 'snack':
      state.consumedFood.snack = action.payload.snack;
      break;
    default:
      break;
  }
};

const handeGetFoodFullfiled = (state, action) => {
  state.consumedFood.cardID = action.payload[0]?._id;
  state.consumedFood.totalCalories = action.payload[0]?.totalCalories;
  state.consumedFood.totalCarbs = action.payload[0]?.totalCarbs;
  state.consumedFood.totalProtein = action.payload[0]?.totalProteins;
  state.consumedFood.totalFat = action.payload[0]?.totalFats;

  if (action.payload) {
    state.consumedFood.breakfast = action.payload[0]?.breakfast;
    state.consumedFood.dinner = action.payload[0]?.dinner;
    state.consumedFood.lunch = action.payload[0]?.lunch;
    state.consumedFood.snack = action.payload[0]?.snack;
  }
};

const deleteHandlerFullfilled = (state, action) => {
  const type = action.meta.arg.typeFood;
  if (action.payload.message) {
    state.consumedFood[type] = [];
  } else {
    state.error = action.payload.message;
  }
};

const handleUpdateFoodFullfiled = (state, action) => {
  state.consumedFood.breakfast = action.payload[0]?.breakfast;
  state.consumedFood.dinner = action.payload[0]?.dinner;
  state.consumedFood.lunch = action.payload[0]?.lunch;
  state.consumedFood.snack = action.payload[0]?.snack;
};

const consumedFood = {
  _id: '',
  totalCalories: 0,
  totalCarbs: 0,
  totalProtein: 0,
  totalFat: 0,
  breakfast: [],
  lunch: [],
  dinner: [],
  snack: [],
};

const initialState = {
  consumedFood,
  isOpen: false,
};

const dailyStatisticsFoodSlice = createSlice({
  name: 'dailyStatisticsFood',
  initialState,

  reducers: {
    openHandler(state, action) {
      state.isOpen = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder

      .addCase(addFood.fulfilled, handleAddFoodFullfiled)
      .addCase(getFood.fulfilled, handeGetFoodFullfiled)
      .addCase(updateFood.fulfilled, handleUpdateFoodFullfiled)
      .addCase(getFood.rejected, handleRejected)
      .addCase(deleteFood.fulfilled, deleteHandlerFullfilled),
});
export const { openHandler } = dailyStatisticsFoodSlice.actions;
export const dailyStatisticsFoodReducer = dailyStatisticsFoodSlice.reducer;

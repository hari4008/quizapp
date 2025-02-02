import { configureStore } from '@reduxjs/toolkit';
import quizSlice from '../redux/slices/quizSlice';


const store = configureStore({
  reducer: {
    quizStore: quizSlice,
  },
});

export const RootState = store.getState();
export const AppDispatch = store.dispatch;

export default store;

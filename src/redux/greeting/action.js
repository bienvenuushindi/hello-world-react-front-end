import { createAsyncThunk } from '@reduxjs/toolkit';
import randomGreeting from './api';

const FETCH_RANDOM_GREETING = 'hello-world-react-front-end/greeting/FETCH_RANDOM_GREETING';
export const FETCH_RANDOM_GREETING_FULFILLED = 'hello-world-react-front-end/greeting/FETCH_RANDOM_GREETING/fulfilled';

export const fetchRandomGreeting = createAsyncThunk(FETCH_RANDOM_GREETING,
  async () => randomGreeting());

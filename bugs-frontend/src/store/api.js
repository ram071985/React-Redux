import { createAction } from '@reduxjs/toolkit';
import api from './middleware/api';

export const apiCallBegan = createAction("api/apiCallBegan");
export const apiCallSuccess = createAction("api/apiCallSuccess");
export const apiCallFailed = createAction("api/apiCallFailed");

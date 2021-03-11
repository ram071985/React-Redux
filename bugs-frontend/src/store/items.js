import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";
import moment from "moment";


const slice = createSlice({
  name: "items",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    itemsRequested: (items, action) => {
      items.loading = true;
    },

    itemsReceived: (items, action) => {
      items.list = action.payload;
      items.loading = false;
      items.lastFetch = Date.Now;
    },

    itemsRequestFailed: (items, action) => {
      items.loading = false;
    },

    itemAdded: (items, action) => {
      items.list.push(action.payload);
    },
  },
});

export const {
  itemAdded,
  itemsReceived,
  itemsRequested,
  itemsRequestFailed,
} = slice.actions;

export default slice.reducer;

// Action creators
const url = "/items";

export const loadItems = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.items;

  const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  if (diffInMinutes < 10) return;

  return dispatch(
    apiCallBegan({
      url,
      onStart: itemsRequested.type,
      onSuccess: itemsReceived.type,
      onError: itemsRequestFailed.type,
    })
  );
};

export const addItem = (item) =>
  apiCallBegan({
    url,
    method: "post",
    data: item,
    onSuccess: itemAdded.type,
  });

// Selectors

export const getItems = createSelector(
    state => state.entities.items,
    items => items.list
);
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const fetchContacts = createAsyncThunk(
    "contacts/get",
    async (_, thunkAPI) => {
        try {
          const response = await axios.get("/contacts");
          return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
    
export const addContact = createAsyncThunk(
    "contacts/add",
        async ({name, number}, thunkAPI) => {
          try {
                const response = await axios.post("/contacts", {name, number});
      return response.data;
      
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/delete",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  userInfos: {
    firstName: null,
    lastName: null,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart(state) {
      state.status = "loading";
      state.error = null;
    },
    loginSuccess(state, action) {
      state.status = "succeeded";
      state.token = action.payload;
      state.error = null;
    },
    loginFailed(state, action) {
      state.status = "failed";
      state.error = action.payload;
    },
    updateProfileSuccess(state, action) {
      state.userInfos = action.payload;
    },
    logout(state) {
      state.token = null;
      state.status = "idle";
      state.error = null;
      state.userInfos = { firstName: null, lastName: null };
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailed,
  logout,
  setUserInfos,
  updateProfileSuccess,
} = authSlice.actions;

export default authSlice.reducer;

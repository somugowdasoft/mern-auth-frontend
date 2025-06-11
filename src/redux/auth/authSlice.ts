import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { AuthState, LoginPayload, SignupPayload, AuthUser } from "./authTypes";

const initialState: AuthState = {
    user: null,
    token: null,
    loading: false,
    error: null,
};

const authSlice = createSlice({

    name: "auth",
    initialState,
    reducers: {
        signupRequest(state, _action: PayloadAction<SignupPayload>) {
            state.loading = true;
            state.error = null;
        },
        signupSuccess(state, action: PayloadAction<{ user: AuthUser; token: string }>) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.loading = false;
        },
        signupFailure(state, action: PayloadAction<string>) {
            state.error = action.payload;
            state.loading = false;
        },
        loginRequest(state, _action: PayloadAction<LoginPayload>) {
            state.loading = true;
            state.error = null;
        },
        loginSuccess(state, action: PayloadAction<{ user: AuthUser; token: string }>) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.loading = false;
        },
        loginFailure(state, action: PayloadAction<string>) {
            state.error = action.payload;
            state.loading = false;
        },
        logout: (state) => {
            state.token = null;
            localStorage.removeItem("auth");
        },
    },
});

export const {
    signupRequest,
    signupSuccess,
    signupFailure,
    loginRequest,
    loginSuccess,
    loginFailure,
} = authSlice.actions;

export default authSlice.reducer;

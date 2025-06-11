import { call, put, takeLatest } from "redux-saga/effects";
import type { SagaIterator } from "redux-saga";

import {
    signupRequest,
    signupSuccess,
    signupFailure,
    loginRequest,
    loginSuccess,
    loginFailure,
} from "../auth/authSlice";
import { loginApi, signupApi } from "../../api/authApi";
import type { PayloadAction } from "@reduxjs/toolkit";
import { showSuccessToast, showErrorToast } from "../../components/toast";
import type { LoginPayload, SignupPayload } from "../auth/authTypes";


function* handleSignup(action: PayloadAction<SignupPayload>): SagaIterator {
    try {
        const response = yield call(signupApi, action.payload);
        yield put(signupSuccess(response));
        showSuccessToast("Signup successful!");
    } catch (error: any) {
        yield put(signupFailure(error?.response?.data?.message || error.message));
        showErrorToast(error?.response?.data?.error || "Signup failed. Please try again.");
    }
}

function* handleLogin(action: PayloadAction<LoginPayload>): SagaIterator {
    try {
        const response = yield call(loginApi, action.payload);
        yield put(loginSuccess(response));
        localStorage.setItem("token", JSON.stringify(response.token));
        localStorage.setItem("user", JSON.stringify(response.user));
        showSuccessToast("Login successful!");
    } catch (error: any) {
        yield put(loginFailure(error?.response?.data?.message || error.message));
        showErrorToast(error?.response?.data?.error || "Login failed. Please check your credentials.");
    }
}

export default function* authSaga() {
    yield takeLatest(signupRequest.type, handleSignup);
    yield takeLatest(loginRequest.type, handleLogin);
}

import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { userAuthSlice } from "../entities/Admin/admin.slice";
import { adminApi } from "../entities/Admin/api/adminApi";
import { branchApi } from "../entities/Branch/api/branchApi";
import { contactApi } from "../entities/Contact/api/contactApi";
import { organizationApi } from "../entities/Organization/api/organizationApi";
import { invoiceApi } from "../entities/transactEntities/Invoice/api/invoiceApi";
import { paymentApi } from "../entities/transactEntities/Payment/api/paymentApi";
import { ratingApi } from "../entities/Customer/api/ratingApi";

export const store = configureStore({
    reducer: {
        [adminApi.reducerPath]: adminApi.reducer,
        [branchApi.reducerPath]: branchApi.reducer,
        [contactApi.reducerPath]: contactApi.reducer,
        [organizationApi.reducerPath]: organizationApi.reducer,
        [invoiceApi.reducerPath]: invoiceApi.reducer,
        [paymentApi.reducerPath]: paymentApi.reducer,
        [ratingApi.reducerPath]: ratingApi.reducer,
        [userAuthSlice.name]: userAuthSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
        .concat(adminApi.middleware)
        .concat(branchApi.middleware)
        .concat(contactApi.middleware)
        .concat(organizationApi.middleware)
        .concat(invoiceApi.middleware)
        .concat(paymentApi.middleware)
        .concat(ratingApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// 📌 App State Interface and Initial State
import { createReducer, on } from '@ngrx/store';
import * as AppStateActions from './app-state.actions';

export interface AppState {
  isLoading: boolean;
  errorMessage: string | null;
  successMessage: string | null;
  userPreferences: Record<string, any>;
}

export const initialAppState: AppState = {
  isLoading: false,
  errorMessage: null,
  successMessage: null,
  userPreferences: {},
};

// 📌 App State Reducer
export const appStateReducer = createReducer(
  initialAppState,
  on(AppStateActions.setLoading, (state, { isLoading }) => ({
    ...state,
    isLoading,
  })),
  on(AppStateActions.setError, (state, { error }) => ({
    ...state,
    errorMessage: error,
  })),
  on(AppStateActions.clearError, (state) => ({
    ...state,
    errorMessage: null,
  })),
  on(AppStateActions.setSuccess, (state, { message }) => ({
    ...state,
    successMessage: message,
  })),
  on(AppStateActions.clearSuccess, (state) => ({
    ...state,
    successMessage: null,
  })),
  on(AppStateActions.setUserPreferences, (state, { preferences }) => ({
    ...state,
    userPreferences: { ...state.userPreferences, ...preferences },
  }))
);

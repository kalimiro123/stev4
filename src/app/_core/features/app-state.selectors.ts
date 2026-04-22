// 📌 App State Selectors
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app-state.reducer';

// 📌 Feature selector
export const selectAppState = createFeatureSelector<AppState>('appState');

// 📌 Selectors
export const selectIsLoading = createSelector(
  selectAppState,
  (state: AppState) => state.isLoading
);

export const selectErrorMessage = createSelector(
  selectAppState,
  (state: AppState) => state.errorMessage
);

export const selectSuccessMessage = createSelector(
  selectAppState,
  (state: AppState) => state.successMessage
);

export const selectUserPreferences = createSelector(
  selectAppState,
  (state: AppState) => state.userPreferences
);

export const selectAppStateLoading = createSelector(
  selectIsLoading,
  selectErrorMessage,
  selectSuccessMessage,
  (isLoading, error, success) => ({
    isLoading,
    error,
    success,
  })
);

// 📌 Action - NgRx Store Action Creators
import { createAction, props } from '@ngrx/store';

// 📌 App State Actions
export const setLoading = createAction(
  '[App] Set Loading',
  props<{ isLoading: boolean }>()
);

export const setError = createAction(
  '[App] Set Error',
  props<{ error: string | null }>()
);

export const clearError = createAction(
  '[App] Clear Error'
);

export const setSuccess = createAction(
  '[App] Set Success',
  props<{ message: string }>()
);

export const clearSuccess = createAction(
  '[App] Clear Success'
);

export const setUserPreferences = createAction(
  '[App] Set User Preferences',
  props<{ preferences: Record<string, any> }>()
);

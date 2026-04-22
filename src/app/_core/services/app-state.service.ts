// 📌 App State Service - Facade for managing AppState in NgRx
import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  selectIsLoading,
  selectErrorMessage,
  selectSuccessMessage,
  selectUserPreferences,
  selectAppStateLoading,
} from '../features/app-state.selectors';
import * as AppStateActions from '../features/app-state.actions';
import { AppState } from '../features/app-state.reducer';

@Injectable({
  providedIn: 'root',
})
export class AppStateService {
  private store = inject(Store<{ appState: AppState }>);

  // Observables
  isLoading$ = this.store.select(selectIsLoading);
  errorMessage$ = this.store.select(selectErrorMessage);
  successMessage$ = this.store.select(selectSuccessMessage);
  userPreferences$ = this.store.select(selectUserPreferences);
  appState$ = this.store.select(selectAppStateLoading);

  // Setters
  setLoading(isLoading: boolean): void {
    this.store.dispatch(AppStateActions.setLoading({ isLoading }));
  }

  setError(error: string | null): void {
    this.store.dispatch(AppStateActions.setError({ error }));
  }

  clearError(): void {
    this.store.dispatch(AppStateActions.clearError());
  }

  setSuccess(message: string): void {
    this.store.dispatch(AppStateActions.setSuccess({ message }));
  }

  clearSuccess(): void {
    this.store.dispatch(AppStateActions.clearSuccess());
  }

  setUserPreferences(preferences: Record<string, any>): void {
    this.store.dispatch(AppStateActions.setUserPreferences({ preferences }));
  }
}

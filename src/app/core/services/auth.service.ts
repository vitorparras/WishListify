import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Erros } from '../models/Erros';
import { GenericResponse } from '../models/GenericResponse';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/api/auth`;
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient, private router: Router) {
    var obj = '{}';

    if (this.isLocalStorageAvailable()) {
      obj = JSON.parse(localStorage.getItem('currentUser') || '{}');
    }
    this.currentUserSubject = new BehaviorSubject<any>(obj);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  private isLocalStorageAvailable(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string): Observable<string> {
    const params = new HttpParams()
      .set('email', email)
      .set('password', password);

    return this.http
      .post<GenericResponse<string>>(`${this.apiUrl}/Login`, null, { params })
      .pipe(
        map((response) => {
          if (response.success) {
            return response.data!;
          } else {
            this.handleError(response.erros);
            return '';
          }
        }),
        catchError((error) => {
          console.error('Login error', error);
          return throwError(() => new Error('Login failed'));
        })
      );
  }

  logout(): Observable<void> {
    const token = this.getToken();
    const params = new HttpParams().set('token', token || '');

    return this.http
      .post<GenericResponse<void>>(`${this.apiUrl}/Logout`, null, { params })
      .pipe(
        map((response) => {
          if (response.success) {
            this.clearToken();
          } else {
            this.handleError(response.erros);
          }
        }),
        catchError((error) => {
          console.error('Logout error', error);
          return throwError(() => new Error('Logout failed'));
        })
      );
  }

  setToken(token: string): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem('jwt', token);
    }
  }

  getToken(): string | null {
    if (this.isLocalStorageAvailable()) {
      return localStorage.getItem('jwt');
    }
    return null;
  }

  clearToken(): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.removeItem('jwt');
    }
  }

  isAuthenticated(): boolean {
    if (this.isLocalStorageAvailable()) {
      const token = localStorage.getItem('authToken');
      return this.getToken() != null;
    }
    return false;
  }

  private handleError(erros?: Erros[]): void {
    if (erros) {
      erros.forEach((error) => {
        console.error(`Error - Message: ${error.message}`);
      });
    }
  }
}

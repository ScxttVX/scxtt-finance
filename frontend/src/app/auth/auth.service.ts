import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../environments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl;
  private tokenKey = 'token';
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(
    this.hasToken()
  );

  constructor(private http: HttpClient, private router: Router) {}

  isAuthenticated(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }

  login(email: string, password: string): Observable<any> {
    const url = `${this.apiUrl}/login`;
    const body = { email, password };

    return this.http.post<any>(url, body).pipe(
      tap((response) => {
        if (response && response.token) {
          this.setToken(response.token);
          this.isAuthenticatedSubject.next(true);
          this.router.navigate(['/']);
        }
      })
    );
  }

  /**
   * Realiza o registro de um novo usuário.
   * @param userData { name: string, email: string, password: string }
   * @returns Observable<any>
   */
  register(userData: {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
  }): Observable<any> {
    const url = `${this.apiUrl}/register`;
    return this.http.post<any>(url, userData);
  }

  logout(): Observable<any> {
    const url = `${this.apiUrl}/logout`;

    return this.http.post<any>(url, {}).pipe(
      tap({
        next: () => {
          this.clearToken();
          this.isAuthenticatedSubject.next(false);
        },
        error: () => {
          this.clearToken();
          this.isAuthenticatedSubject.next(false);
        },
      })
    );
  }

  private setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  private clearToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  private hasToken(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }
}

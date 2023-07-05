import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';

export type CallBackRequest<T> = (success: boolean, responseObject: T | string) => void;

@Injectable({
	providedIn: 'root'
})

export class RequestService {

	constructor(
		protected http: HttpClient
	) { }

	protected createURL(endpoint: string): string {
		return environment.baseURL + endpoint;
	}

	protected getRequest<T>(endpoint: string, callBack: CallBackRequest<T>): void {
		const url = this.createURL(endpoint);
		this.http.get<T>(url, { observe: 'response' }).subscribe({
			next: ({ body }: any) => {
				if (callBack) callBack(true, Object(body?.results || body?.error));
			},
			error: error => {
				const errorMessage = error.error?.error;
				if (callBack) callBack(false, errorMessage);
			}
		});
	}

	protected handleError(error: Response): Observable<never> {
		return throwError(error);
	}
}

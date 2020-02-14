import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {inputData} from './input-data';
import {catchError} from 'rxjs/operators';  


@Injectable({
    providedIn: 'root'
})
export class ChargesService {

    private _url: string = "https://localhost:44306/api/meter"; //needs to be https or else it connects to nothing
    constructor(private http: HttpClient) {
        
    }

    handleError(errorResponse: HttpErrorResponse) {
        if(errorResponse.error instanceof ErrorEvent) {
            console.error('Client Side Error: ', errorResponse.error.message);
        } else {
            console.error('Server Side Error: ', errorResponse);
        }
        //throw("it's down");
        return Promise.reject(errorResponse.message || errorResponse);
    }

    getPrice(inputData: inputData) : Promise<number> {
          return this.http.post<number>(this._url, inputData, 
                    {headers: new HttpHeaders({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'})
                    })
                    .toPromise()
                    .catch(this.handleError);
    }
}
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  API_URL = `${environment.apiUrl}`;

  constructor(private http: HttpClient) { }
  getAllEmployee(): Observable<any> {
    return this.http.get<any>(this.API_URL + '/employee/list' );
  }
}

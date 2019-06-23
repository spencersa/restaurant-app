import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurant } from '../models/restaurant';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RestaurantDataService {

    //apiUrl: string = "https://foodraterapi.azurewebsites.net/api/"; 
    //apiCode: string = "?code=iLQ8SX1JTaeVx6dku2UsUSTvZR7jZEYk6GxLEMhjpKzZ5Hnz3kiDVQ==";

    apiUrl: string = "http://localhost:7071/api/"; 
    apiCode: string = "";

    constructor(private http: HttpClient) { }

    getAllRestaurants(): Observable<Restaurant[]> {
        return this.http.get<Restaurant[]>(this.apiUrl + "GetAllRestaurants" + this.apiCode, {responseType: 'json'});
    }

    getRestaurant(rowKey:string): Observable<Restaurant> {
        return this.http.get<Restaurant>(this.apiUrl + "GetRestaurant?rowKey=" + rowKey);
    }

    addRestaurant(restaurant:Restaurant){
        return this.http.post<Restaurant>("http://localhost:7071/api/InsertRestaurant", restaurant);
    }

    addRestaurantRating(restaurant:Restaurant){
        return this.http.post<Restaurant>("http://localhost:7071/api/AddRestaurantRating", restaurant);
    }

    updateRestaurant(restaurant:Restaurant) {
        return this.http.put("http://localhost:7071/api/UpdateRestaurant", restaurant);
    }

    deleteRestaurant(restaurant:Restaurant) {
        return this.http.request("delete", "http://localhost:7071/api/DeleteRestaurant", {body: restaurant});
    }
}
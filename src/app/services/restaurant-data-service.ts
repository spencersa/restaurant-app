import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurant } from '../models/restaurant';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RestaurantDataService {

    apiUrl: string = "https://foodraterapi.azurewebsites.net/api/";

    //apiUrl: string = "http://localhost:7071/api/"; 
    //apiCode: string = "";

    constructor(private http: HttpClient) { }

    getAllRestaurants(): Observable<Restaurant[]> {
        return this.http.get<Restaurant[]>(this.apiUrl + "GetAllRestaurants?" + "code=iLQ8SX1JTaeVx6dku2UsUSTvZR7jZEYk6GxLEMhjpKzZ5Hnz3kiDVQ==", {responseType: 'json'});
    }

    getRestaurant(rowKey:string): Observable<Restaurant> {
        return this.http.get<Restaurant>(this.apiUrl + "GetRestaurant?rowKey=" + rowKey + "&" + "code=Ei5GFV4yBBHLZdQazmv4XgkpREqim0lF0nL/FvEr1ycT7JvoVbagrg==");
    }

    addRestaurant(restaurant:Restaurant){
        return this.http.post<Restaurant>(this.apiUrl + "InsertRestaurant?" + "code=tBaUeU5q0g91C3mENJrGMbGj6fbco3fLk10jJCKte2cEEbvBfeIBrw==", restaurant);
    }

    addRestaurantRating(restaurant:Restaurant){
        return this.http.post<Restaurant>(this.apiUrl + "AddRestaurantRating?" + "code=Pj8ih79EuQsKds/gHz7q9wTp5WZ5CdExypmHnL1SxLsEEU8hjVmEuQ==", restaurant);
    }

    updateRestaurant(restaurant:Restaurant) {
        return this.http.put(this.apiUrl + "UpdateRestaurant?" + "code=a0kdEH76tK7VUTxOh6djPntgbcSLyD2U8T1C9QEdohfJhUO0Lu4tww==", restaurant);
    }

    deleteRestaurant(restaurant:Restaurant) {
        return this.http.request("delete", this.apiUrl + "DeleteRestaurant?" + "code=ag/IcUijdBaFfra8BqJ2hPZ84v9yG6ItsKmBaa9bTPmzzieRya7zag==", {body: restaurant});
    }
}
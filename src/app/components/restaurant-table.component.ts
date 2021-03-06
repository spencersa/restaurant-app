import { Component, OnInit } from '@angular/core';
import { RestaurantDataService } from '../services/restaurant-data-service'
import { Restaurant } from '../models/restaurant';

@Component({
  selector: 'restaurant-table',
  templateUrl: './restaurant-table.component.html',
  styleUrls: ['./restaurant-table.component.css']
})

export class RestaurantTableComponent implements OnInit {

  restaurants: Restaurant[];
  newRestaurantModel: Restaurant;
  ratingRestaurantModel: Restaurant;

  constructor(private restaurantDataService: RestaurantDataService) { }

  ngOnInit() {
    this.getAllRestaurants();
    this.newRestaurantModel = new Restaurant();
    this.ratingRestaurantModel = new Restaurant();
  }

  intializeNewRestaurant(){
    this.newRestaurantModel = new Restaurant();
  }

  intializeRatingRestaurant(restaurant: Restaurant){
    this.ratingRestaurantModel = new Restaurant();
    this.ratingRestaurantModel.rating = restaurant.rating;
    this.ratingRestaurantModel.rowKey = restaurant.rowKey;
    this.ratingRestaurantModel.partitionKey = restaurant.partitionKey;
  }

  getAllRestaurants() {
    this.restaurantDataService.getAllRestaurants().subscribe(
      data => {
        this.restaurants = data
      });
  }

  getRestaurant() {
    this.restaurantDataService.getAllRestaurants().subscribe(
      data => {
        this.restaurants = data
      });
  }

  addRestaurant(restaurant: Restaurant) {
    this.restaurantDataService.addRestaurant(restaurant).subscribe(
      data => {
        this.restaurants.push(data);
      });
  }

  addRestaurantRating(restaurant: Restaurant) {
    this.restaurantDataService.addRestaurantRating(restaurant).subscribe(
      data => {
        this.getAllRestaurants();
      });
  }

  updateIsBeingEditedRow(restaurant: Restaurant, isBeingEdited: boolean) {
    restaurant.isBeingEdited = isBeingEdited;
    if (isBeingEdited === false){
      this.restaurantDataService.getRestaurant(restaurant.rowKey).subscribe(
        restaurantData => {
          restaurant.rowKey = restaurantData.rowKey;
          restaurant.partitionKey = restaurantData.partitionKey;
          restaurant.name = restaurantData.name;
          restaurant.address = restaurantData.address;
          restaurant.description = restaurantData.description;
          restaurant.hours = restaurantData.hours;
          restaurant.rating = restaurantData.rating;
        });
    }
  }

  updateRestaurant(restaurant: Restaurant) {
    this.restaurantDataService.updateRestaurant(restaurant).subscribe(
      data => {
        restaurant.isBeingEdited = false;
      });
  }

  deleteRestaurant(restaurant: Restaurant) {
    this.restaurantDataService.deleteRestaurant(restaurant).subscribe(
      data => {
        const index = this.restaurants.indexOf(restaurant, 0);
        if (index > -1) {
          this.restaurants.splice(index, 1);
        }
      });
  }
}

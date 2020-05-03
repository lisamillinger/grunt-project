"use strict";

export default class City {
    constructor(city) {
       Object.assign(this, city);
    }

    //Markup for ListView
    getListMarkup(){

        let markup =  "<div id='citydiv' class='card' style='width: 18rem'>";
        markup += "<img width='250' src='"+this.image+"' class='card-img-top' />";
        markup += "<div class='card-body'>"
        markup += "<h5 class='card-title'>"+this.name+ "/" + this.country + "</h5>";
        markup += "<p class='card-text'>" + this.nickname + "</p>";
        markup += "<a href='#/city?id="+this["_id"]+"' class='city btn btn-primary' data-id='"+this.id+"'>Details</a>";
        markup += "</div></div>"
        return markup;
    }

    //Markup for SingleItem
    getSingleMarkup() {
        let markup =  "<div id='singlecity'>";
        markup += "<b id='nick'> "+ " \"" + this.nickname+ "\" " + "</br>";
        markup += "<img id='singlecitypic' src='"+this.image+"' alt='"+this.name+"' />";
        markup += "</div>";
        markup += "<hr>";

        return markup;
    }

}
"use strict";

export default class Hotel {
    constructor(hotel) {
        Object.assign(this, hotel);
    }

    //Markup for ListView
    getListMarkup(){
        let markup = "<div class='card mb-3' style='max-width: 540px;'>";
        markup += "<div class='row no-gutters'>";
        markup += "<div class='col-md-4'>";
        markup += "<img src='"+this.images[0]+"' class='card-img'>";
        markup +=  "</div><div id='hoteldiv' class='col-md-8'>";
        markup += "<div class='card-body'>";
        markup += "<h5 class='card-title'>" + this.name+ " ("  + this.stars + "*)" + "</h5>";
        markup += "<a href='#/hotel?id="+this["_id"]+"' class='city btn btn-primary' data-id='"+this.id+"'>Details</a></div></div></div></div>";
        return markup;
    }

    //Markup for SingleItem
    getSingleMarkup() {
        let markup =  "<div id='singlehotel'>";
        markup += "<span id='hname'>"+ this.name+ " ("  + this.stars + "*)" + "</span></br>";
        markup += "<span id='haddress'>"+ this.address + ", " + this.city + ", " + this.country + "</span></br>";
        markup += "<span id='contact'>"+ this.email + ", " + this.phone+ "</span></br><hr>";
        markup += "<p id='hdescr'>"+ this.description + "</p>";
        markup += "<div class='container'>" + "<div class='row'>"
            + "<div class='col-sm'><img src='"+this.images[0]+"'/></div>"
            + "<div class='col-sm'><img src='"+this.images[1]+"'/></div></div></div>";

        $("#hoteldescription").append(markup);

        for(let a in this.amenities) {
            if (this.amenities[a] == true) {
                console.log(a);
                let markup2 = "<li class='list-group-item'>" + a + "</li>";
                $("#amenities ul").append(markup2);
            }
        }
    }

}
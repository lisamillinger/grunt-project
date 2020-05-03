"use strict";
import Core_View from "./../core/core.spa-view.js?v=0.1";


export default class CityView extends Core_View{
    constructor(slug, template){
        super(slug, template);
        this.city = undefined;
    }

    init(){
        super.init();
        //Here comes view specific javascript
        if(window.Core.utils.isEmpty(window.Core.getParams["id"]) || window.Core.model.getCity(window.Core.getParams["id"]) == false) {
            window.location.hash = "/";
        }

        else{
            let self = this;
            window.Core.model.getCity(window.Core.getParams["id"]).then(function(response){
                self.city = response;
                self.render();
            });
        }
    }

    async render()
    {
        $("#viewTitle").text(this.city.name + " (" + this.city.country + ")");
        $("#city_description").html(this.city.getSingleMarkup());
        $("#viewhoteltitle").text("Hotels");
        let hotels = await window.Core.model.getHotelsBy("city", this.city.name);
        for(let hotel of hotels) {
            $("#hotels_city").append(hotel.getListMarkup());
        }
    }
}
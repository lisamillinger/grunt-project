"use strict"; //verbietet definieren ohne let
import Core_App from "./core/core.app.js?v=0.1";
import LoginView from  "./views/view.login.js?v=0.1"
import StartpageView from "./views/view.startpage.js?v=0.1";
import CityView from "./views/city.view.js";
import HotelView from "./views/hotel.view.js";

//first route is startpage
    let routes = [
        new StartpageView("/", "startpage"),
        new LoginView("/login", "login"),
        new CityView("/city", "city"),
        new HotelView("/hotel", "hotel")
    ];

    const C_Holidays_App = new Core_App("http://localhost/C_Holidays_Copy_Taskrunner/", "templates", routes, "de", "en");

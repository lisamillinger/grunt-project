"use strict";
import Core_View from "./../core/core.spa-view.js?v=0.1";

export default class LoginView extends Core_View{
    constructor(slug, template){
        super(slug, template);
    }

    init(){
        //overriding
        super.init();

        $("#login-submit").unbind("click").on("click", function(e){
            e.preventDefault();
            window.location.hash = "/";
        });
        //Here comes view specific javascript
    }
}
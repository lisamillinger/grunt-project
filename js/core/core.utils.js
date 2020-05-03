"use strict";
/***************************************************
 *  A Collectorclass for several useful functions.
 *  Contains functions that are general and usable
 *  in different apps.
 *
 *  Neuwersch, 2020-03-15
 ***************************************************/
export default class Core_Utils{
    constructor(){
    }

    //Cookie wir gesetzt
    setCookie(name, value, days) {
        let d = new Date();
        d.setTime(d.getTime() + (days*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    //Cookie wird geholt
    getCookie(name) {
        let v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
        return v ? v[2] : null;
    }

    //Cookie wird gelöscht
    deleteCookie(name) {
        //Expiredate wird auf vergangenes Datum gesetzt
        document.cookie = name+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }

    isEmpty(variable) {
        if(Array.isArray(variable))
            return(variable.length ==0)
        else if(typeof  variable === "object")
            return(Object.entries(variable).length === 0 && variable.constructor === Object);
        else
            return(typeof variable === "undefined" || variable == null || variable == "");
    }

}
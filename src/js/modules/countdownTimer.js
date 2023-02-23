/**
* @fileOverview 
* @author Carlos Antunes
* @version 1.0.0
*/


export class ContDownTimer {

    options = {
        language : "en"
    }
    
    /**
    * 
    * @param {Object} options - Options to initialise class
    * @param {callback} cb - Function called after the end of the contdown
    */
    constructor (options, cb){

        this.options = Object.assign({}, options, this.options)

        this.cb = cb

        this.intervalId = setInterval(this.setDate.bind(this), 1000)

        this.contdownCallback(this.cb)
    }
    

    setDate(){
        
        
        const days = document.querySelector('#days');
        const hours = document.querySelector('#hours');
        const minutes = document.querySelector('#minutes');
        const seconds = document.querySelector('#seconds');
        
        // timestemp now depuis 1970
        this.now = new Date();
        
        /**
         * Seconds 
         * 
         * returns the date in seconds 
                ((dateStart since 1970 - today since 1979) / 1000) 
                    - today since 1979 "timstemp UTC" 
                    * 60 
                    - number of seconds in the current month
         */
        let s = ((this.options.launchDate.getTime() - this.now.getTime())/1000)  - this.subtractDays();

        /* 
            conversion of the date from seconds to days 
                24h * 60min * 60seconds = 86400
                round down
        */
        const d = Math.floor(s/86400)
        // days - html
        days.innerHTML = `<strong>${d}</strong><span>${this.translate("day")}${(d > 1 ? 's' : '' )}</span>`
        
        /* 
            Time remaining
                seconds - days * 86400
        */
        s -= d*86400;
        
        // heures
        const h = Math.floor(s/3600);
        hours.innerHTML = `<strong>${h}</strong><span>${this.translate("hour")}${(h > 1 ? 's' : '' )}</span>`

        /* 
            Time remaining
                seconds - hours * 3600
        */
        s -= h*3600;
        
        // minutes
        const m = Math.floor(s/60);
        minutes.innerHTML = `<strong>${m}</strong><span>${this.translate("min")}${(m > 1 ? 's' : '' )}</span>`

        /* 
            Time remaining
                seconds - minutes * 60
        */
        s -= m*60;
        
        // secondes
        s = Math.floor(s);
        seconds.innerHTML = `<strong>${s}</strong><span>${this.translate("sec")}${(s > 1 ? 's' : '' )}</span>`
        
        if (this.addMonths(new Date(), 1) >= this.options.launchDate){
            return this.contdownCallback(this.cb)
        }
        
    }
    
    /**
     * 
     * @param {callback} callback - callback function 
     * @returns callback
     */
    contdownCallback(callback){
        if (this.addMonths(new Date(), 1) >= this.options.launchDate){

            clearInterval(this.intervalId)

            return callback()
        }
    }
    
    /**
     * 
     * @param {Date.year} year 
     * @param {Date.month} month 
     * @returns integer - nomber of day of the month
     */
    getDays = (year, month) => {
        return new Date(year, month, 0).getDate();
    };
    
    /**
     * 
     * @returns Number of seconds for a current month
     */
    subtractDays(){
        return this.getDays(this.now.getFullYear(), this.now.getMonth() + 1) * 86400
        
    }
    
    /**
     * 
     * @param {Date} date - current date (now)
     * @param {number} months - add month to current date
     * @returns new formated date
     */
    addMonths(date, months){
        date.setMonth(date.getMonth() + months);
        return date;
    }

    /**
     * 
     * @param {string} language 
     * @returns Translate
     */
    translate(translate){
        const language = {
            fr : {
                day : "Jour",
                hour : "Heure",
                min : "Minutes",
                sec : "Seconde"
            },
            en : {
                day : "Day",
                hour : "Hour",
                min : "Minute",
                sec : "Second"
            }
        }
        return language[this.options.language ][translate]
    }

    
}

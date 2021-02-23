const moment = require('moment')
const legalDays = require('./legalDays').map( el => moment(el.dt).format("DD.MM.YYYY") )

const isLegalDay = (day) => {
    let ld = legalDays.filter( el => el === day.format("DD.MM.YYYY"))
    return ld.length > 0 ? true : false
}

const dtcalc = function dateCalc({params},res) {
    let {days, from} = params
    console.log("from:", from)
    const initalDay = from ? new moment(from) : new moment()

    
    let r = []
    for ( let i = 0; r.length < days; i++) {
         
        let day =  i === 0 ? initalDay.clone() : initalDay.clone().add(i, "day") 
       
        let weekday = day.clone().format("dd")
        if ( !["Su", "Sa"].includes(weekday) &&  !isLegalDay(day)) {
            r.push(day.clone())
        }
    }


    res.send("<pre>" +JSON.stringify({
        start: initalDay.clone(),
        days: days,
        end: r[r.length-1],
    }, null, 4) +"</pre>" )
}

module.exports = dtcalc
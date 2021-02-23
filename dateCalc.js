const moment = require('moment')
const legalDays = require('./legalDays').map( el => moment(el.dt).format("DD.MM.YYYY") )

const isLegalDay = (day) => {
    let ld = legalDays.filter( el => el === day.format("DD.MM.YYYY"))
    return ld.length > 0 ? true : false
}

const dtcalc = function dateCalc({params},res) {
    let {days} = params

    const initalDay = new moment("2021-12-01")
    console.log("INITIAL: ",initalDay.format("DD.MM.YYYY"))
    
    let r = []
    for ( let i = 1; r.length < 45; i++) {
        let day = initalDay.clone().add(i, "day")
       
        let weekday = day.format("dd")
        if ( !["Su", "Sa"].includes(weekday) &&  !isLegalDay(day)) {
            r.push(day)
        }
    }


    res.send("<pre>" +JSON.stringify({
        start: moment().format("DD.MM.YYYY"),
        days: days,
        end: r[r.length-1],
        freeDays: legalDays
    }, null, 4) +"</pre>" )
}

module.exports = dtcalc
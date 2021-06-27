console.log("Project intended to split a large MP3 based on it's accompanying timestamp file.");
const fs = require("fs");

var data = fs.readFileSync("210624_1115.tmk", "utf-8")

let timestamp = "";

let dataCleaned = [];

class TimStamp {
    constructor(stampNumber, fromStart, realTime){
        this.stampNumber = stampNumber;
        this.fromStart = fromStart;
        this.realTime = realTime
    }
}

fs.stat('210624_1115.tmk', (err, stats) => {
    if(err) {
        throw err;
    }
    // console.log(Object.keys(stats))

    // print file last modified date
    // console.log(`File Data Last Modified: ${stats.mtime}`);
    // console.log(`File Status Last Modified: ${stats.ctime}`);
    // console.log(`File Size: ${stats.size}`);
    // console.log(`File Created: ${stats.birthtime}`);
    // console.log(stats.birthtime);
    // converterVariable = stats.birthtime;
    // console.log(converterVariable  + " is supposedly the stats.birthtime");
    // console.log(Date(converterVariable) + " is supposedly the date.")
    // console.log(Date.now() - converterVariable);
    // console.log(typeof(converterVariable))
    // let converterDate = Date(converterVariable);
    // console.log(typeof(converterDate))
    // console.log(converterDate)
    //Learning complete here. birthtimeMs doesn't work. just birthtime.
    timestamp = stats.birthtime;
    console.log(timestamp);
    dataCleaned.push(new TimStamp(0, 0, Number(stats.birthtime))) 
    // console.log(dataCleaned[0].stampNumber + " is inside the stat block.");
    // console.log(typeof(dataCleaned[28]), dataCleaned[28].stampNumber, dataCleaned[28].fromStart);
    // Lol, this finished running after the stuff outside, so this ends up getting pushed in last.
    // I could either make sure the stuff below runs after this, or I could just be aware of it 
    // and sort my data by the stampNumber variable instead of the index. 
    data = data.split("\r\n")
    // console.log(data) 
    console.log(Number(timestamp))
    console.log(data.length)
    data.forEach(oldtime => {
        let stampNumber = ( data.indexOf(oldtime) + 1 );
        // console.log(oldtime)
        // console.log(oldtime.slice(1,-1))
        // console.log(oldtime.replace(':', ''));
        // console.log(oldtime.slice(1,-1).replace(':','').replace('.',''));
        let newOldtime = oldtime.replace('[','').replace(']','').replace(':','').replace('.','');
        let minutes = Number(newOldtime.slice(0,5));
        let seconds = Number(newOldtime.slice(5,7));
        let millisecs = Number(newOldtime.slice(7,9));
        let evenNewerOldTime = (millisecs + seconds*100 + minutes*6000)
        console.log(minutes, "minutes", seconds,"seconds", millisecs, "milliseconds", evenNewerOldTime, "total milliseconds");
        // console.log("newOldtime inputted: " + newOldtime + typeof(newOldtime));
        let newRealtime = dataCleaned[0].realTime + evenNewerOldTime;
        // console.log("newRealtime inputted: " + newRealtime + typeof(newRealtime));
        // catching empty lines.
        if (oldtime.length > 4) {
        dataCleaned.push(new TimStamp(stampNumber, evenNewerOldTime, newRealtime));
            
        }
    });
    // console.log("Cleaned " + dataCleaned.length + " timestamps and added to array.");
    // console.log(dataCleaned[0].stampNumber + " is at 0 position.");
    // console.log(dataCleaned[1].stampNumber + " is at 1 position");
    // console.log(dataCleaned[0]);
    // console.log(dataCleaned[10]);
    // let zippity = Date.now(timestamp);
    // let dooda = zippity + Number(dataCleaned[0].fromStart)
    // console.log(Number(dataCleaned[0].fromStart))
    // console.log(zippity);
    // console.log(dooda);
    // console.log(zippity - dooda);
    // CONFIRMED - timestamps will meld without issue, both accurate to the same number of digits. 
    // console.log(typeof(dataCleaned[0].realTime), dataCleaned[0].realTime, "is the first timestamp", new Date(dataCleaned[0].realTime));
    // console.log(typeof(dataCleaned[1].realTime), dataCleaned[1].realTime, "is the 1st timestamps real time.", new Date(dataCleaned[1].realTime));
    // console.log(typeof(dataCleaned[25].realTime), dataCleaned[25].realTime, "is the 25th timestamps real time.", new Date(dataCleaned[25].realTime));
    let lastHolder = 1624743738591
    for (let i = 0; i < dataCleaned.length; i++) {
        const element = dataCleaned[i];
        console.log(element.realTime - lastHolder);
    }
    console.log(dataCleaned);
});






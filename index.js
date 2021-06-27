// Filesystem read capability needed for this
const fs = require("fs");
// grabbin' my data
var data = fs.readFileSync("./samples/210624_1115.tmk", "utf-8")
// somewhere to keep my finished products
let newStamps = [];
// the ideal shape of my finished products
class TimStamp {
    constructor(stampNumber, fromStart, realTime){
        this.stampNumber = stampNumber;
        this.fromStart = fromStart;
        this.realTime = realTime
    }
}
// reading the stats off of a file to determine the real world start time
fs.stat('./samples/210624_1115.tmk', (err, stats) => {
    if(err) {
        throw err;
    }
    // saving the creation time of the file as the initial timestamp
    timestamp = stats.birthtime;
    // and sending it to the finished product array as my first entry
    newStamps.push(new TimStamp(0, 0, Number(stats.birthtime))) 
    // splitting the .TMK file line by line
    data = data.split("\r\n")
    // and iterating through it to clean it up
    data.forEach(oldtime => {
        // starting the index at +1, since we've already got T-0
        let stampNumber = ( data.indexOf(oldtime) + 1 );
        // stripping out the extra characters from Sony's timestamp format
        let newOldtime = oldtime.replace('[','').replace(']','').replace(':','').replace('.','');
        // and converting it into milliseconds for interacting with a regular Date
        let evenNewerOldTime = (Number(newOldtime.slice(7,9)) + Number(newOldtime.slice(5,7))*1000 + Number(newOldtime.slice(0,5))*60000)
        // creating a real-world time stamp, the initial file creation time plus the value in ms of the timestamp
        let newRealtime = newStamps[0].realTime + evenNewerOldTime;
        // this just catches empty lines if there are any at the top or bottom of the .TMK file
            // TODO :   Maybe this is really dumb and bad. It seems rickety somehow. 
            //          Maybe... fix it... later... 
        if (oldtime.length > 4) {
            // Get on in there you shiny cleaned up lil thinger!
            newStamps.push(new TimStamp(stampNumber, evenNewerOldTime, newRealtime));
        }
    });
    // This just checks to see that something happened by looping through
    //      and showing an incrementally increasing list of timestamps. 
    //      which is kinda what I'm lookin' fer. So does that mean 
    //          I can claim I have experience with testing? :P
    let lastHolder = 1624743738591
    for (let i = 0; i < newStamps.length; i++) {
        const element = newStamps[i];
        console.log(element.realTime - lastHolder);
    }
    // console.log(newStamps);
});
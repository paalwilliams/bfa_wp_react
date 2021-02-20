export class Utils {

    constructor() {

    }

    static createMarkup(arg) {
        return {__html: arg};
      }
      
    static formatPostDate(date) {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let n = new Date(date);
        let d = days[n.getDay()];
        let y = n.getFullYear();
        let m = months[n.getMonth()];
        let dw = n.getDate();
        return `${m} ${dw}, ${y}`;
    }
}

export default Utils;
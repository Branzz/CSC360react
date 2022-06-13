export default class DateUtil {
    static currentDate() {
        const now = new Date(Date.now());
        return now.getMonth() + "/" + now.getDate() + "/" + now.getFullYear()
            + " at " + this.zeroBuf(((now.getHours() + 12) % 13)) + ":" + this.zeroBuf(now.getMinutes()) + ":" + this.zeroBuf(now.getSeconds());
    }
    static zeroBuf(n) {
        if (n === 0)
            return "00";
        else if (n < 10)
            return "0" + n;
        else
            return n;
    }
}

export default class DateUtil {
    static currentDate() {
        const now = new Date(Date.now());
        return now.getMonth() + "/" + now.getDate() + "/" + now.getFullYear()
            + " at " + ((now.getHours() + 12) % 13) + ":" + now.getMinutes() + ":" + now.getSeconds();
    }
}

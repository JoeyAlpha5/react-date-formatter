const short_days = ["Sun","Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
const long_days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const short_months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct","Nov","Dec"];
const long_months = ["January", "February", "March", "April", "May", "June", "July", "August", "Septemer","October","November","December"];

class DateFormat{
    constructor(str_date){
        this.new_date = new Date(str_date);
        this.date = this.new_date.getDate();
        this.day = this.new_date.getDay();
        this.month = this.new_date.getMonth();
        this.year = this.new_date.getFullYear();
    }

    longDate(){
        return `${long_days[this.day]}, ${this.date} ${long_months[this.month]}, ${this.year}`;
    }

    shortDate(){
        return `${short_days[this.day]}, ${this.date} ${short_months[this.month]}, ${this.year}`;

    }
}


function DateFormatter(str_date){
    var formatted_date = new DateFormat(str_date);
    return formatted_date;
}

export default DateFormatter
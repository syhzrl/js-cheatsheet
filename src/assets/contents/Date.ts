import { CardContent } from 'entity/Card';

const dateCode = `const date = new Date();
//Tue Nov 29 2022 17:34:31 GMT+0800 (Malaysia Time)

Number(date) 
//1669714471963 miliseconds passed since 1970

// date declaration
Date('2017-06-23');

//is set to Jan 01
Date('2017');

//date - time YYYY-MM-DDTHH:MM:SSZ
Date('2017-06-23T12:00:00-09:45');

//long date format
Date('June 23 2017');

//time zone
Date('Jun 23 2017 07:45:00 GMT+0100 (Tokyo Time)');`;

const getCode = `getDay(); //getting the weekday
getDate(); //day as a number (1-31)
getDay(); //weekday as a number (0-6)
getFullYear(); //four digit year (yyyy)
getHours(); //hour (0-23)
getMilliseconds(); //milliseconds (0-999)
getMinutes(); //minutes (0-59)
getMonth(); //month (0-11)
getSeconds(); //seconds (0-59)
getTime(); //milliseconds since 1970`;

const setCode = `setDate(); //sets date
setDate(); //day as a number (1-31)
setFullYear(); //year (optionally month and day)
setHours(); //hour (0-23)
setMilliseconds(); //milliseconds (0-999)
setMinutes(); //minutes (0-59)
setMonth(); //month (0-11)
setSeconds(); //seconds (0-59)
setTime(); //milliseconds since 1970)`;

const dateContent: CardContent[] = [{
    text: 'Date',
    code: dateCode,
}, {
    text: 'Getters',
    code: getCode,
}, {
    text: 'Setters',
    code: setCode,
}];

export default dateContent;

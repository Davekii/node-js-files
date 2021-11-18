// include nodemailer
const nodemailer = require('nodemailer');
const fs = require('fs');


// declare vars
let fromMail = 'hwangdoyeonyu@gmail.com';
let toMail = 'waylake2003@gmail.com';

// let toMail = 'gnbaviskar2@gmail.com,gnbaviskar3@gmail.com';

let subject  = 'Send the mail by the nodejs';
let text = "Mail Seding tested" 

// auth
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: fromMail,
        pass: 'Hill99020808@'
    }
});

// read weather data
var weatherData = fs.readFileSync('/Users/davek/working_files/nodejs_files/weather/weather.log', {encoding: 'utf8', flag: 'r'});

// email options
let mailOptions = {
    from: fromMail,
    to: toMail,
    subject: subject,
    text: weatherData
};


// send email
transporter.sendMail(mailOptions, (error, response) => {
    if (error) {
        console.log(error);
    }
    console.log(weatherData)
});

var prompt = require('prompt-sync')();
function ageCinema(age, day, ticket) {

    age = prompt('How old are you ? : ');
    day = prompt('Which day is this ? : ');
    ticket = prompt('Are you holder of any special of ticket or card ? : ');

    if (age < 3) {
        console.log(`Your welcome for this age ${age} under 3 years old area is Free Offer.`);
    }

    if (age >= 3 && age <= 12) {
        console.log(`Your welcome for Your age : ${age} from 3 years old to 12 years area is $5 Offer.`);
    }

    if (age >= 13 && age <= 17) {
        console.log(`Your welcome for Your age : ${age} from 13 years old to 17 years area is $7 Offer.`);
    }

    if (age >= 18 && age <= 64) {
        console.log(`Your welcome for Your age : ${age} from 18 years old to 64 years area is $10 Offer.`);
    }


    if (age >= 65) {
        console.log(`Your welcome for Your age : ${age} from 65 years old to older years area is $6 Offer.`);
    }

    else if (day === "Tuesday") {
        console.log(`It's ${day}, all tickets are only $5(regardless of age)`);
    }

    else if (ticket === "loyalty card") {
        console.log(`You have a ${ticket}, they get $2 off the normal price`);

    } else {
        console.log(`Discounts don't apply to free tickets`);
    }
    return;
}

while (true) {
    ageCinema();
}

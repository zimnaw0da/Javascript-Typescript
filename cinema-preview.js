function CheckMovieEligibility(movie) {
    var movies = {
        "film1": {"required_age": "example 28 ", "price": 30},
        "film2": {"required_age": "example 16", "price": 25}, // you can set your own ticket price, age and film name
        "film3": {"required_age": "example 13", "price": 40},
    };
    
    if (movie in movies) {
        var required_age = movies[movie]["required_age"];
        var price = movies[movie]["price"];
        return [movie, required_age, price];
    } else {
        return null;
    }
}

function BuyTicket() {
    while (true) {
        var movie_choice = prompt("Please enter the movie you want to watch (film1, film2, or film3): ");
        var movie_info = CheckMovieEligibility(movie_choice);
        if (movie_info) {
          
            var movie = movie_info[0];
            var required_age = movie_info[1];
            var price = movie_info[2];
            console.log("Movie: " + movie + "\nRequired Age: " + required_age + "\nPrice: " + price);
            var age = prompt("Please enter your age: ");
            var money = prompt("Please enter your current money: ");
            try {
              
                age = parseInt(age);
                money = parseFloat(money);
                if (age >= required_age && money >= price) {
                    var decision = prompt("Do you want to buy a ticket for '" + movie + "'? (type 'yes' or 'no'): ");
                    if (decision.toLowerCase() === 'yes') {
                        console.log("You have purchased a ticket. Enjoy the movie!");
                        break;
                      
                    }
                }
            }
            catch (error) {
                console.log("Invalid input. Please try again.");
            }
        }
    }
}
BuyTicket();

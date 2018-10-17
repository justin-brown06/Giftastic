$(document).ready(function () {

    
    //Adding new search button.
    $("#add-gif").on("click", function () {
        event.preventDefault();
        
        var gifSearch = $("#gif-search").val().trim();

        var addedGif = $("<button>").attr("data-starwars", gifSearch).text(gifSearch);

        $("#add-gif-button").append(addedGif);

        console.log(addedGif);
    });

    $(".btn-dark").on("click", function () {
        event.preventDefault();
        // Grabbing and storing the starwars property value from the button
        starwars = $(this).attr("data-starwars");

        // Constructing a queryURL using starwars name
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + starwars + "&api_key=dc6zaTOxFJmzC&limit=10";

        // Performing an AJAX request to giphy
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(queryURL);

            console.log(response);
            // storing the data from the AJAX request in the results variable
            var results = response.data;

            // Looping through each result item
            for (var i = 0; i < results.length; i++) {


                var starwarsDIV = $("<div>");

                var p = $("<p>").text("Rating: " + results[i].rating);

                var starwarsImage = $("<img>");

                starwarsImage.attr("src", results[i].images.fixed_height.url);

                starwarsDIV.append(p);
                starwarsDIV.append(starwarsImage);

                $("#gifs-appear-here").prepend(starwarsDIV);
            }
        });
    });
    // Needed to create a way to prevent empty searches from being added as buttons.
    // New buttons were not returning searches.
    // clean-it up, make 2 columns available on larger screens.
    
});

$(".search").on("click", function (event) {
       event.preventDefault();
    //Deen CODE ----


    var beginYear = $("#begin-year").val() + "0101";
    var endYear = $("#end-year").val() + "1231";
    var numRecords = parseInt($("#num-records").val());
    var searchTerm = $("#search-field").val();


    //we need to make sure that if begin-year and end-year are not specififed then we pass empty strings


    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&begin_date=" + beginYear + "&end_date=" + endYear + "&api-key=0a4b3bbd873f41d6a3ab2ee4183e0cd5";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function (response) {
            console.log(response);
            var results = response.docs;

            for (var i = 0; i < numRecords; i++) {
                var articleDiv = $("<div class='article'>");

                // where we prepend items in the div, I think we need to go through the response object items and push them t
                // articleDiv.prepend();
                // articleDiv.prepend();

                result.attr("data-headline", response.docs[i].data.headline.main);
                result.attr("data-summary", response.docs[i].data.lead_paragraph);
                result.attr("data-date", response.docs[i].data.pub_date);
                result.attr("data-url", response.docs[i].data.web_url);


                $("#top-articles").prepend(articleDiv);
            }
        });
});
                     
$(".clearResults").on("click", function () {

        $("#top-articles").empty();

    });

//Joyce code brainstorm: yes to above
                      
//                       $").click(function(event) {
//   														event.preventDefault();



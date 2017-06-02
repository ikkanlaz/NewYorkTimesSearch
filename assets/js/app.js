
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
    }).done(function (val) {
            console.log(val.response.docs);
            var results = val.response.docs;

            for (var i = 0; i < results.length; i++) {
                var articleDiv = $("<div class='article'>");
                   
                var num = $("<span class='article__number'>");
                num.text(i+1);
                   
                var headLine = $("<p class='article__headline'>");
                headLine.text(val.response.docs[i].headline.main);
                
                var summary = $("<p class='article__summary'>");
                summary.text(val.response.docs[i].snippet);
                   
                var pubDate = $("<p class='article__date'>");
                pubDate.text(val.response.docs[i].pub_date);
                   
                var url = $("<a class='article__url'>");
                url.attr("href", val.response.docs[i].web_url);
                url.text(val.response.docs[i].web_url);
                   
                

                // where we prepend items in the div, I think we need to go through the response object items and push them t
                // articleDiv.prepend();
                // articleDiv.prepend();

//                 result.attr("data-headline", response.docs[i].data.headline.main);
//                 result.attr("data-summary", response.docs[i].data.lead_paragraph);
//                 result.attr("data-date", response.docs[i].data.pub_date);
//                 result.attr("data-url", response.docs[i].data.web_url);
                headLine.append(num);
                articleDiv.append(headLine);
                articleDiv.append(summary);
                articleDiv.append(pubDate);
                articleDiv.append(url);

                $("#top-articles").append(articleDiv);
            }
        });
});
                     
$(".clearResults").on("click", function () {

        $("#top-articles").empty();

    });

//Joyce code brainstorm: yes to above
                      
//                       $").click(function(event) {
//   														event.preventDefault();



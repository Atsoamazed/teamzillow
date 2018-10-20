var trulia_js_url = "https://raw.githubusercontent.com/Atsoamazed/teamzillow/master/trulia.JSON"

var request = new Request(trulia_js_url)

fetch(request).then(function(response) {
 return response.json();
}) .then(function(response) {
 console.log(response)

 var BlogTitleElements = document.getElementsByClassName('blog-title')
 var BlogTitle = response.reviews[0].name

 var BlogSummaryElements = document.getElementsByClassName('post-summary')


for (var i= 0; i<BlogTitleElements.length; i++){
 	BlogTitle = response.reviews[i].name
 	BlogSummary = response.reviews[i].review_text

 	var titleElement = BlogTitleElements[i]
 	titleElement.innerHTML= BlogTitle

 	var BlogSummaryElement = BlogSummaryElements[i]

 	BlogSummaryElement.innerHTML = BlogSummary;
 }
})

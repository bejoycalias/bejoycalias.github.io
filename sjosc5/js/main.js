//Checking for potential Lever source or origin parameters
var pageUrl = window.location.href;
var leverParameter = '';
var trackingPrefix = '?lever-'

if( pageUrl.indexOf(trackingPrefix) >= 0){
  // Found Lever parameter
  var pageUrlSplit = pageUrl.split(trackingPrefix);
  leverParameter = '?lever-'+pageUrlSplit[1];
}

function createJobs(_data) {
  for(i = 0; i < _data.length; i++) {
    var posting = _data[i] ;
    var title = posting.text;
    var description = posting.description;
    //Making each job description shorter than 250 characters
    var shortDescription = $.trim(description).substring(0, 250)
    .replace('\n', ' ') + "...";
    var location = posting.categories.location;
    var commitment = posting.categories.commitment;
    var team = posting.categories.team;
    var link = posting.hostedUrl+leverParameter;

    /*$('#jobs-container .jobs-list').append(
      '<div data-link="'+link+'" class="job '+team+' '+location+' '+commitment+'">' +
        '<h2 class="job-title" href="'+link+'"">'+title+'</h2>' +
        '<p class="tags"><span>'+team+'</span><span>'+location+'</span><span>'+commitment+'</span></p>' +
        '<p class="description">'+shortDescription+'</p>' +
      '</div>'  
    );*/
    $('#jobs-container .jobs-list').append(
      '<div class="wrapper"><h3 class="job-title col-xs-8">'+title+'</h3>' +
      '<div class=" col-xs-4"><a class="apply-btn" href="'+link+'" target="_blank">APPLY</a></div>'+
      '<div class="clearfix"></div></div>'
      )
  }

  $('#jobs-container').slimScroll({
        height: '250px',
        alwaysVisible: true,
        distance: '0px',
        color: '#2ec368',
        wheelStep: 10,
        allowPageScroll: false
    });
}

//Fetching job postings from Lever's postings API
$.ajax({
  dataType: "json",
  url: url,
  success: function(data){
    createJobs(data);
  }
});


// A $( document ).ready() block.
$( document ).ready(function() {
$("#jobs-container").on("click" , ".job",  function() {
    var link = $(this).data("link");
    window.location.href = link;
});
// $('.carousel').carousel({
//   interval: 3000,
//   pause: false
// })
});



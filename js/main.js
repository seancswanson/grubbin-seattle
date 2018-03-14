$(document).ready(function() {
const IG_AT = "475741907.1677ed0.a801a6b3146a4cb8857a56bd58357716";
const USER_ID = "475741907" ;
const NUM_PHOTOS = 12;
const insta_container = $('.div--container__insta');
$.ajax({
  url: 'https://api.instagram.com/v1/users/' + USER_ID + '/media/recent',
  dataType: 'jsonp',
  type: 'GET',
  data: {access_token: IG_AT, count: NUM_PHOTOS},
  success: function(data){
    console.log(data);
    for (x in data.data) {
      $(insta_container).append(`<a href="${data.data[x].link}"> <img src="${data.data[x].images.thumbnail.url}"></a><p>hey</p>`)
    }
  },
  error: function(data) {
    console.log(data);
  }
});

})
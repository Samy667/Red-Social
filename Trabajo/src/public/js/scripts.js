$(function() {
  // Post Toggle View
  $('#post-comment').hide();
  $('#btn-toggle-comment').click(e => {
    e.preventDefault();
    $('#post-comment').slideToggle();
  });
  
  // Like Button Request
  $('#btn-like').click(function(e) {
    e.preventDefault();
    let imgId = $(this).data('id');
    console.log(imgId)
    $.post('/images/' + imgId + '/like')
      .done(data => {
      console.log('back:', data)
        $('.likes-count').text(data.likes);
      });
  });

  // Delete Button Request
  $('#btn-delete').click(function (e) {
    e.preventDefault();
    let $this = $(this);
    const response = confirm('Are you sure you want to delete this image?');
    if (response) {
      let imgId = $(this).data('id');
      $.ajax({
        url: '/images/' + imgId,
        type: 'DELETE'
      })
        .done(function(result) {
          $this.removeClass('btn-danger').addClass('btn-success');
          $this.find('i').removeClass('fa-times').addClass('fa-check');
          $this.append('<span>Deleted!</span>');
        });
    }
  });
});
$(document).ready(function () {


  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyASYUMKnkGmHlDIvwS2n8ncjmjUIOyzSdU",
    authDomain: "social-media-77959.firebaseapp.com",
    databaseURL: "https://social-media-77959-default-rtdb.firebaseio.com",
    projectId: "social-media-77959",
    storageBucket: "social-media-77959.appspot.com",
    messagingSenderId: "801125895767",
    appId: "1:801125895767:web:86585f54f461249b049d12",
    measurementId: "G-V74Y5TE395"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

});
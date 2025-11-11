// siam.js
(function() {
  // তোমার main domain
  var home = "https://videotoday71.blogspot.com/";

  // যেসব পেজ redirect করতে চাও (array আকারে)
  var redirectList = [
  "https://watchvarse4.blogspot.com/p/blog-page.html";
  "https://adx3uq.blogspot.com/p/11-siam.html";
  ];

  // এখন চেক করবে বর্তমান URL এর path
  var currentPath = window.location.pathname;

  // যদি এই path লিস্টে থাকে → redirect করবে
  if (redirectList.includes(currentPath)) {
    window.location.replace(home);
  }
})();

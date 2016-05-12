$(".box").hover(function() {
  $(this).css({
    backgroundColor: "blue",
    "-webkit-transform": "rotateZ(180deg) scale3d(2,2,1)",
    zIndex: 100
  });
}, function() {
  $(this).css({
    backgroundColor: "red",
    "-webkit-transform": "rotateZ(0deg) scale3d(1,1,1)",
    zIndex: 1
  });
})
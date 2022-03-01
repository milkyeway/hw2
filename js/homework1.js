$('img').on('mouseenter', function () {
  $(this).attr('src', "../images/homework1/chngstar.gif").prevAll().attr('src', "../images/homework1/chngstar.gif").end().nextAll().attr('src', "../images/homework1/star.gif");
  $('#score').html('打分中...' + $(this).attr('data-id'))
}).on('mouseleave', function () {
  $('img').attr('src', "../images/homework1/star.gif");
  $('img[index="dianji"]').attr('src', "../images/homework1/chngstar.gif").prevAll().attr('src', "../images/homework1/chngstar.gif");
  $('#score').html('')
}).on('click', function () {
  $(this).attr('index', 'dianji').siblings().removeAttr('index');
  $('#score').html('你給了' + $(this).attr('data-id') + '顆星')
  // 解除on的滑鼠事件，避免重複執行.html()
  $("img").off("mouseleave")
  $("img").off("mouseenter")
  $("img").off("click")
  $("img").css("cursor","no-drop")
})

$('#clean').click(function () {
  $('#score').html('')
  $('img').attr('src', "../images/homework1/star.gif")
}) 
let chngstar = '../images/homework1/chngstar.gif'
let star = '../images/homework1/star.gif'

$('.reload').hide(); //重新評分關閉

$('img').on('mouseenter', function () {
  $(this).attr('src', chngstar).prevAll().attr('src', chngstar).end().nextAll().attr('src', star);
  $('#score').html('打分中...' + $(this).attr('data-id'))
}).on('mouseleave', function () {
  $('img').attr('src', star);
  $('img[index="dianji"]').attr('src', chngstar).prevAll().attr('src', chngstar);
  $('#score').html('')
}).on('click', function () {

  $(this).attr('index', 'dianji').siblings().removeAttr('index');
  $('#score').html('你給了' + $(this).attr('data-id') + '顆星')
  $('.reload').show(); //重新評分開啟

  // 解除on的滑鼠事件，避免重複執行.html()
  $("img").off("mouseleave")
  $("img").off("mouseenter")
  $("img").off("click")
  $("img").css("cursor", "no-drop")
})

$('#clean').click(function () {
  $('#score').html('')
  $('img').attr('src', star)
})

//重新評分按鈕 刷新頁面事件
$('.reload').click(function () {
  window.location.reload();
})
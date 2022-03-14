(function (doc, win) {
  var docEl = doc.documentElement,
    // 手機旋轉事件,大部分手機瀏覽器都支援 onorientationchange 如果不支援，可以使用原始的 resize
    resizeEvt =
      "orientationchange" in window ? "orientationchange" : "resize",
    recalc = function () {
      //clientWidth: 獲取對象可見内容的寬度，不包括滾動條，不包括邊框
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      if (window.innerWidth <= 768) {
        document.documentElement.style.fontSize = clientWidth / 7.68 + "px";          
      } else if (window.innerWidth >= 1920) {
        document.documentElement.style.fontSize = 1920 / 19.2 + "px";
      } else {
        document.documentElement.style.fontSize = clientWidth / 19.2 + "px";
      }
    };

  recalc();
  //判断是否支援監聽事件 ，不支援則停止
  if (!doc.addEventListener) return;
  //註冊翻轉事件
  win.addEventListener(resizeEvt, recalc, false);
})(document, window);
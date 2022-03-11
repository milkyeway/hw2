$.ajax({
  url: 'a',  //網址或路徑
  method: 'POST', //請求資料的方式
  dataType: 'a', //請求資料的類型  Ex:xml, json, script, or html...等
//data:  //如果需要傳送資料時，則將資料設定在這裡。

  success: function (res) {
    console.log(res)
  },
  error: function (error) {
    console.log(error);
  }
});
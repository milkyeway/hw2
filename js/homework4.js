// jQuery.getJSON( url [, data ] [, success ] )
$.getJSON("/js/public/data-zh.json", "", function (data) {
  //each迴圈 使用$.each方法遍歷返回的資料date
  // console.log(data.districts)

  $.each(data.districts, function (j) {
    let c = j;
    let c_text = data.districts
    // console.log(c_text[c])
    let str1 = '<tr data-id="' + c + '"><th rowspan="' + +'"></th></tr>'
    $('.thead').append(str1);


    $.map(c_text[c][0], function (k) {
      // console.log(k)
      let str = '<tr><td>' + k + '</td></tr>'
      $('.tbody').append(str);
    })

    $.map(c_text[c][1], function (o) {
      // console.log(o)
      let str = '<tr><td>' + o + '</td></tr>'
      $('.tbody1').append(str);
    })
  })

  $.each(data.counties, function (i) {
    // console.log(i)
    // console.log(data.counties.length)
    console.log($('thead tr'))

    // switch (i) {
    //   case 1:
    //     let str = '<tr><th rowspan="">' + i + '</th></tr>'
    //     break;

    //   default:
    //     break;
    // }
    // console.log($('.thead').find('tr'))

    // console.log(toString($('.thead').find('tr')[i]))
    // let str = '<tr><th rowspan="">' + i + '</th></tr>'
    // console.log(i)
    // $('.thead').append(str);
  })
});
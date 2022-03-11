// jQuery.getJSON( url [, data ] [, success ] )
$.getJSON("/js/public/data-zh.json", "", function (data) {
  //each迴圈 使用$.each方法遍歷返回的資料date
  // console.log(data.districts)
  
  // console.log(data);
  
  $.each(data, function (index, value) {
    // console.log(index,'1');
    // console.log(value,'2');
    // console.log(value.name,'3');
    console.log(data,'4');
    
    $.each(value.districts, function (index, value) {
      // console.log(value.districts.length);
      // console.log(data[0].districts);
      console.log(districts);
      // console.log(value.zip);
      // console.log(value.name);
    })
  })

  // $.each(data.districts, function (j) {
  //   let c_text = data.districts
  //   let c = j;
  //   // console.log(c_text[c])
  //   // let str1 = '<tr data-id="' + c + '"><th rowspan="' + +'"></th></tr>'
  //   // $('.thead').append(str1);


  //   $.map(c_text[c][0], function (k) {
  //     // console.log(k)
  //     let str = '<tr><td>' + k + '</td></tr>'
  //     $('.tbody').append(str);
  //   })

  //   $.map(c_text[c][1], function (o) {
  //     // console.log(o)
  //     let str = '<tr><td>' + o + '</td></tr>'
  //     $('.tbody1').append(str);
  //   })
  // })

  // $.each(data.counties, function (i) {
  //   let a = data.districts[i][0].length
  //   let b = data.counties[i]
  //   // console.log(a)
  //   // console.log(b)
  //   // console.log(b)
  //   for (e = 0; e < $('thead tr').length; e++) {
  //     // let en = $('.thead tr:nth-child(' + (e + 1) + ')').data('id');
  //     // let ae = $('.thead tr').data('id', en)[e]
  //     // console.log(en)
  //     // console.log(ae)
  //     // // console.log(e1)
  //     // let str0 = '<tr data-id="' + c + '"><th rowspan="' + +'"></th></tr>'
  //     // console.log(i)
  //     console.log(e)
  //     // < tr data-id="' + c + '" > <th rowspan="' + +'"></th></ >

  //     // $('').append(str0)
  //     // console.log(e) //0
  //     // console.log($('.thead tr:nth-child(' + (e + 1) + ')').data('id'))
  //     // console.log(e) //1
  //     // console.log($('.thead tr:nth-child(' + (e + 1) + ')').data('id'))

  //   }

  // })
});
// console.log(data);
// console.log(data[0].districts);

$.each(data, function (index, value) {
  // console.log(index);
  // console.log(data);
  // console.log(value);
  // console.log(value.name); //*th
  // console.log(value.districts);
  // console.log(value.districts.length);

  let value_add = value.districts.length + 1;
  // console.log(value_add);

  // let str = '<tr><th class="th" rowspan="' + value.districts.length + '">' + value.name + '</th></tr>';
  let str = '<tr><th class="th" rowspan="' + value_add + '">' + value.name + '</th></tr>';
  $('.tbody').append(str);

  $.each(value.districts, function (index, value) {
    // console.log(value);
    // console.log(value.zip);
    // console.log(value.name);

    let str = '<tr><td>' + value.name + '</td><td class="k">' + value.zip + '</td></tr>';
    $('.tbody').append(str);

  })
})
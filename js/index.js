/**
 * Created by XS-021 on 2017/5/16.
 */
var $header = document.getElementById('header');

var html = '';
for(var i=0;i<indexData.class.length;i++){

  html += "<div class='class-list fl'>"+indexData.class[i]+"</div>"
}
$header.innerHTML = html;

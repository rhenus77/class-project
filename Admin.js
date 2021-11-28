var submitAll = document.getElementById('submit-all');
var submitSup = document.getElementById('submit-sup');
var submitStf = document.getElementById('submit-stf');
var submitPsl = document.getElementById('submit-psl');
var deleteAll = document.getElementById('delete-all');
var deleteAll1 = document.getElementById('delete-all1');

submitAll.addEventListener('click', function submitAll () {
  var inputValue = CKEDITOR.instances.editor1.getData();

  var li = document.createElement("li");
  li.innerHTML = inputValue;
  if (inputValue === '') {
    alert("You must write something!");
  } else {
   var ul = document.getElementById("myUL")
  ul.appendChild(li);
  }
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  li.style.borderBottom = '1.5px solid black'
    li.style.marginBottom = '15px'
    span.style.cursor = 'pointer'

  var close = document.getElementsByClassName("close")
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      ul.removeChild(div);
    }
  }
});

submitSup.addEventListener('click', function submitSup() {
  console.log('hello')
})

submitStf.addEventListener('click', function submitStf() {
  console.log('world')
})

submitPsl.addEventListener('click', function submitPsl() {
var inputValue = CKEDITOR.instances.editor2.getData();
console.log(inputValue);

var li = document.createElement("li");
// var t = document.createTextNode(inputValue);
li.innerHTML = inputValue;
console.log(li)
if (inputValue === '') {
  alert("You must write something!");
} else {
 var ul = document.getElementById("myUL2")
ul.appendChild(li);
}
var span = document.createElement("span");
var txt = document.createTextNode("\u00D7");
span.className = "close";
span.appendChild(txt);
li.appendChild(span);
li.style.borderBottom = '1.5px solid black'
    li.style.marginBottom = '15px'
    span.style.cursor = 'pointer'

var close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var divs = this.parentElement;
    ul.removeChild(divs);
  }
}
});

deleteAll.addEventListener('click', function deleteAll() {
  var lis = document.querySelectorAll('#myUL2 li');
  for(var i=0; li=lis[i]; i++) {
    li.parentNode.removeChild(li);
}
});

deleteAll1.addEventListener('click', function deleteAll1() {
  var lis = document.querySelectorAll('#myUL li');
  for(var i=0; li=lis[i]; i++) {
    li.parentNode.removeChild(li);
}
});

CKEDITOR.replace( 'editor1' );
CKEDITOR.replace( 'editor2' );

// CKEDITOR.instances.editor1.setData('');
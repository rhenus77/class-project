var deleteAll = document.getElementById('delete-all');
var submitPsl = document.getElementById('submit-psl');

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

CKEDITOR.replace( 'editor2' );

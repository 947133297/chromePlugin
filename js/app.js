document.onkeydown = function(evt){
    var sel = document.getSelection().toString().trim();
    if(18 === evt.keyCode && sel.length > 0){ // alt
        window.open('https://movie.douban.com/subject_search?search_text=' + sel);
    }
}
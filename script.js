var url = document.getElementById("input_url").value;
const getLastItem = thePath => thePath.substring(thePath.lastIndexOf('/') + 1)
// console.log(typeof(url));
document.getElementById("form").addEventListener("submit", function(event){
    
    event.preventDefault();
    const expression = "^((http|https):\/\/|(http|https):\/\/?(www\.)|[wW]{3}\.|)digikala\.com\/product?(\/.*)?$"
    const regex = new RegExp(expression);
    
    if (regex.test(url)) {     
        addLinktoList(String(url));
    }else{
        alert("Type a correct url");
    }
    
});
function addLinktoList(url) {
    
    // Remove whitespace from both sides of url.
    url = url.trim();
    // Get the title.                
    var str = getLastItem(url).replaceAll('-', ' '); ;
    var result = str.link(url).replace('a href=', 'a target="_blank" href='); 

    isinList = checkListforUrl(result);
    if (!isinList) {
        // Create list element.
        var li = document.createElement("li"); 
        // Append the anchor element to the list. 
        li.innerHTML = result;
        document.getElementById("list").appendChild(li);
    }
    
}
function checkListforUrl(a) { 
    var ul = document.getElementById("list");   
    var items = ul.getElementsByTagName("li");
    for (var i = 0; i < items.length; i++){
        if(items[i].value.href == a.href) return true;
    }
    return false;
} 
function modeHandler(){
    var element = document.body;
    element.classList.toggle("dark-mode");
}


function myFunction() {
    var original = document.getElementById("new-div-main");
    var clone = original.cloneNode(true);
    var attr = document.createAttribute("class");
    attr.value = "space-between-div";
    var h = document.getElementById("new-bottom-row").appendChild(clone);
    h.setAttributeNode(attr);
}
// Open and close the sidebar on medium and small screens
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

// Change style of top container on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        document.getElementById("myTop").classList.add("w3-card-4", "w3-animate-opacity");
        document.getElementById("myIntro").classList.add("w3-show-inline-block");
    } else {
        document.getElementById("myIntro").classList.remove("w3-show-inline-block");
        document.getElementById("myTop").classList.remove("w3-card-4", "w3-animate-opacity");
    }
}

// function from org-mode
function CodeHighlightOn(elem, id)
{
    var target = document.getElementById(id);
    if(null != target) {
        elem.cacheClassElem = elem.className;
        elem.cacheClassTarget = target.className;
        target.className = "code-highlighted";
        elem.className   = "code-highlighted";
    }
}
function CodeHighlightOff(elem, id)
{
    var target = document.getElementById(id);
    if(elem.cacheClassElem)
        elem.className = elem.cacheClassElem;
    if(elem.cacheClassTarget)
        target.className = elem.cacheClassTarget;
}

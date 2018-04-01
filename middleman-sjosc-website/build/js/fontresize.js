var els = document.getElementsByClassName("back-light"),
refWidth = els[0].clientWidth,
refFontSize = parseFloat(window.getComputedStyle(els[0],null).getPropertyValue("font-size")),
i = 1;
while(!!els[i]){
  els[i].style.fontSize = refFontSize * refWidth / els[i].clientWidth + "px";
  i++;
}

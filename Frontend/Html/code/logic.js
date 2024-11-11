function runHtmlCode() {
    let htmlCode = document.getElementById("htmlCode").value;
    let outputFrame = document.getElementById("output").contentWindow.document;
    outputFrame.open();
    outputFrame.write(htmlCode);
    outputFrame.close();
}
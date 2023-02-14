var iframe = document.getElementById("myIframe1");

iframe.onload = function() {
  var iframeContent = iframe.contentWindow.document.body.scrollHeight;
  iframe.style.height = iframeContent + "px";
};

// Path: JeffsPage/index.html
//Testing Push
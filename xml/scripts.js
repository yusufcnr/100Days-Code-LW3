const xhr = new XMLHttpRequest();
const url = "data.xml";

xhr.responseType = "document";
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      const xmlDoc = xhr.responseXML;
      const pre = document.createElement("pre");
      
    }
  }
}
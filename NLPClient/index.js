const apiPath = 'http://127.0.0.1:5000/';

fileUpload = document.getElementById("text_file");
fileUpload.addEventListener("change", function(e){
    uploadFile(e.target.files[0])
})

async function uploadFile(file) {
    let formData = new FormData();
    formData.append('file', file);
    // fileLoader.style.display = "flex";
  
    fetch(apiPath + 'upload', {
      body: formData,
      method: "post"
    }).then(handleErrors)
    .then(response => {
      return response.json();
    }).then(data => {
      fileLoader.style.display = "none";
      var audioDownloadEnpoint = apiPath + "audio/" + data.audio;
      parseTreeDownloadPath = apiPath + "tree/" + data.tree;
      setAndPlayAudio(audioDownloadEnpoint);
      showParseTreeButton(true);
    });
  }

function handleErrors(response){
    if (!response.ok) {
        stopLoading();
        window.alert(response.statusText);
        throw Error(response.statusText);
    }
    return response;
}

function stopLoading(){
//   if(isTextOption){
//     textLoader.style.display = "none";
//   } else if (isFileOption) {
//     fileLoader.style.display = "none";
//   } else if (isArticleOption) {
//     articleLoader.style.display = "none";
//   }
}
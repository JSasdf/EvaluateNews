import { urlCheck } from "./urlCheck";

function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let url = document.getElementById("url").value;
  if (!urlCheck(url)) {
    return alert("URL is not valid");
  }

  console.log("::: Form Submitted :::");
  fetch("//localhost:8080/analysis", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ url })
  })
    .then(res => res.json())
    .then(function(res) {
      document.getElementById("nlp-text").innerHTML = res.text;
      document.getElementById("polarity").innerHTML = res.polarity;
      document.getElementById("polarity_confidence").innerHTML =
        res.polarity_confidence;
      document.getElementById("subjectivity").innerHTML = res.subjectivity;
      document.getElementById("subjectivity_confidence").innerHTML =
        res.subjectivity_confidence;
    });
}

export { handleSubmit };

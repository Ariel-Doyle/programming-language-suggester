//UI Logic

function getAndSetRadioButtonValues() {
  e.preventDefault();
  const radioSelection1 = document.querySelectorAll("input[name='decide1']:checked").value;
  const radioSelection2 = document.querySelectorAll("input[name='decide2']:checked").value;
  const radioSelection3 = document.querySelectorAll("input[name='decide3']:checked").value;
  const radioSelection4 = document.querySelectorAll("input[name='decide4']:checked").value;
  const radioSelection5 = document.querySelectorAll("input[name='decide5']:checked").value;
 
  let result;
  if (radioSelection1 === "Agree") {
    result = "C#";
  } else if (radioSelection1 === "Disagree") {
    result = "Ruby";
  } else if (radioSelection1 === "Neutral") {
    result = "Python";
  }
}

function setFormSubmissionEventHandler() {
  let form = document.querySelector("form");
  form.addEventListener("submit", function(e) {
    e.preventDefault();
  });
}

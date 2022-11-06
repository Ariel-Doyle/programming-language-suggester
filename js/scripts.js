window.addEventListener("load", function() {

  function getAndSetRadioButtonValues() {
    const radioSelection1 = parseFloat(document.querySelector("input[name='decide1']:checked").value);
    const radioSelection2 = parseFloat(document.querySelector("input[name='decide2']:checked").value);
    const radioSelection3 = parseFloat(document.querySelector("input[name='decide3']:checked").value);
    const radioSelection4 = parseFloat(document.querySelector("input[name='decide4']:checked").value);
    const radioSelection5 = parseFloat(document.querySelector("input[name='decide5']:checked").value);

    const radioSum = radioSelection1 + radioSelection2 + radioSelection3 + radioSelection4 + radioSelection5;    
    
    if (radioSum > 3) {
      return "C#";
    } else if (radioSum > 2) {
      return "JavaScript";
    } else if (radioSum > 1 ) {
      return "Ruby";
    } else {
      return "Python";
    }  
  }

  let form = document.querySelector("form");
  let startBtn = document.getElementById("start-btn");
  let tryAgainBtn = document.getElementById("reset-btn");
  let heroDiv = document.getElementById("hero-section")
  let formDiv = document.getElementById("form-div");
  let resultDiv = document.getElementById("result-intro")

  document.body.addEventListener("click", function() {
    formDiv.removeAttribute("class");
    startBtn.classList.add("hidden");
  });

  form.addEventListener("submit", function(e) {
    e.preventDefault(); 
    resultDiv.classList.remove("hidden"); 
    heroDiv.classList.add("hidden");
    document.getElementById("output").innerText = getAndSetRadioButtonValues();
  });

  tryAgainBtn.addEventListener("click", function() {
    heroDiv.classList.remove("hidden");
    resultDiv.classList.add("hidden");
    document.getElementById("q1-neutral").checked = true;
    document.getElementById("q2-neutral").checked = true;
    document.getElementById("q3-neutral").checked = true;
    document.getElementById("q4-neutral").checked = true;
    document.getElementById("q5-neutral").checked = true;
  });

});
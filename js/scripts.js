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
  let tryAgainBtn = document.getElementById("reset-btn");
  let heroDiv = document.getElementById("hero-section")
  let formDiv = document.getElementById("form-div");
  let resultDiv = document.getElementById("result-intro")

  document.body.addEventListener("click", function() {
    formDiv.removeAttribute("class");
  });

  form.addEventListener("submit", function(e) {
    e.preventDefault(); 
    resultDiv.classList.remove("hidden"); 
    heroDiv.classList.add("hidden");
    document.getElementById("output").innerText = getAndSetRadioButtonValues();
  });

  /*document.body.addEventListener("click", function() {
    heroDiv.removeAttribute("class");
    reset.removeAttribute("class");
  });*/

  tryAgainBtn.addEventListener("click", function() {
    heroDiv.classList.remove("hidden");
    resultDiv.classList.add("hidden");
    document.querySelector("input[name='decide1']:checked").checked = "0" ;
    document.getElementById("q2-neutral").value = 0;
    document.getElementById("q3-neutral").value = 0;
    document.getElementById("q4-neutral").value = null;
    document.getElementById("q5-neutral").value = null;
  })

});
//UI Logic
window.addEventListener("load", function() {

  function getAndSetRadioButtonValues() {
    const radioSelection1 = parseFloat(document.querySelector("input[name='decide1']:checked").value);
    const radioSelection2 = parseFloat(document.querySelector("input[name='decide2']:checked").value);
    const radioSelection3 = parseFloat(document.querySelector("input[name='decide3']:checked").value);
    const radioSelection4 = parseFloat(document.querySelector("input[name='decide4']:checked").value);
    const radioSelection5 = parseFloat(document.querySelector("input[name='decide5']:checked").value);

    const radioSum = radioSelection1 + radioSelection2 + radioSelection3 + radioSelection4 + radioSelection5;    
    
    let result;
    if (radioSum > 3) {
      result = "C#";
    } else if (radioSum > 2) {
      result = "JavaScript";
    } else if (radioSum > 1 ) {
      result = "Ruby";
    } else {
      result = "Python";
    }   

    document.getElementById("output").innerText = result;
  }

  let form = document.querySelector("form");
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      getAndSetRadioButtonValues();
    });
});

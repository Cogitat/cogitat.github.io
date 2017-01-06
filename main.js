function checkBeforeSubmit(){
  // add checks
  $.post("https://script.google.com/macros/s/AKfycbyar_RCtzJTWqSF8mnuCDEJNvKPYelmhPIlv8XG7Uq7uhd3uyul/exec",
                  $('#GoogleForm').serialize(),
                  function(data) {
	                document.getElementById('success').hidden = false;
                  });
}

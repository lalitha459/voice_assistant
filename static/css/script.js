
window.onload = function() {
    document.getElementById('myDIV').style.display = 'none';
  };
  
  var buttons = document.querySelectorAll('.buttons button');
  
  
  
  var text = document.querySelector('.text');
  
  buttons[1].style.visibility = 'visible';
  buttons[2].style.visibility = 'visible';
  buttons[3].style.visibility = 'visible';
  
  
  
  
  
  buttons.forEach(button => {
    
    button.addEventListener('click', () => {
      
      text.textContent = "You Pressed" + button.textContent;
      
      switch(button) {
          
        // case with edit button
        case buttons[0]:
          
            buttons[0].style.visibility = 'visible';
            buttons[1].style.visibility = 'visible';
            buttons[2].style.visibility = 'visible';
            buttons[3].style.visibility = 'visible';
          
          break;
        
        // case with back button
        case buttons[1] : 
          
          buttons[0].style.visibility = 'visible';
          buttons[1].style.visibility = 'visible';
            buttons[2].style.visibility = 'hidden';
            buttons[3].style.visibility = 'hidden';
              (function () {
        var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      // x.style.display = "none";
    }
  })();
          
          break;
          
                case buttons[2] :
          
          buttons[0].style.visibility = 'visible';
          buttons[1].style.visibility = 'hidden';
          buttons[2].style.visibility = 'visible';
          buttons[3].style.visibility = 'hidden';
          
                      (function () {
        var x = document.getElementById("myDIV");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      // x.style.display = "none";
    }
  })();
          
          break;
        
        //  default optional
        default:
          console.log("nothing to do!!");
        break;
          
      }
      
    });
    
  });



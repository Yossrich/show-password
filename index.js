function changeText() {
    // Access the heading element by its ID
    const heading = document.getElementById("heading");
  
    // Change the text content of the heading
    heading.textContent = "MERN STACK PRO BOOTCAMP";
  
    // Access the paragraph element by its ID
    const paragraph = document.getElementById("content");
  
    // Add a CSS class to highlight the paragraph
    paragraph.classList.add("highlight");
  
    //change the text content
    paragraph.innerText = "this is a new paragraph";
  }

        {
  var a;
  function showPassword()
{     const passwordInput = document.getElementById('password')
      const eyeiconInput = document.getElementById('eyeicon')

  
  if (a==1)
  {
    passwordInput.type = 'password'
    eyeiconInput.src='eye-close-1.png';
  
a=0;
}

else 
{
  passwordInput.type = "text";
  eyeiconInput.src='eye-openimg.png';
  a=1;
}
}
        }
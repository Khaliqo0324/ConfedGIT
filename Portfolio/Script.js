
let modeButton = document.getElementsByClassName("dark-mode")[0];

let lightSwitch = () => {
    //background-color
    let body = document.querySelector("body");
    body.style.backgroundColor = "white";

    //light mode button
    modeButton.style.backgroundColor = "white";
    let image = document.getElementsByClassName("display-img")[0];
    image.src = "light.jpeg";
    modeButton.setAttribute("onclick", "darkSwitch()");


    //navbar
    let navItems = document.querySelectorAll(".menu a");
    navItems.forEach(item => {
        item.style.color = "black";
    })

    let homeText = document.querySelector(".text-2");
    homeText.style.color = "black";

    let aboutText = document.querySelectorAll(".right p");
    aboutText.forEach(text => {
        text.style.color = "black";
    })

    let resumebtn = document.querySelector(".resume");
    
    //resume button hover styling
    for (let sheet of document.styleSheets) {
        try {
          // Loop through all CSS rules in the stylesheet
          for (let rule of sheet.cssRules) {
            // Check if the rule matches the :hover selector for .menu a
            if (rule.selectorText === 'button.resume:hover') {
              // Update the hover style
              rule.style.color = 'black'; // Change hover color to black
              rule.style.backgroundColor = 'white';
            }
          }
        } catch (e) {
          // Catch and ignore CORS errors for external stylesheets
          console.warn("Unable to access some stylesheet rules due to CORS.");
        }
      }

    //skills items
    let skillImgs = document.querySelectorAll(".skills-content img");
    skillImgs.forEach( img => {
        img.style.backgroundColor = "rgba(255, 255, 255, 0.4)"
    })

    let skillTitles = document.querySelectorAll(".skills-content h3");
    skillTitles.forEach (title => {
        title.style.color = "rgb(40, 40, 40)";
    }
    )

    //contact-imgs
    let linkedinLogo = document.querySelector(".linkedin img");
    linkedinLogo.src = "linkedin-logow.svg";

    let mailLogo = document.querySelector(".gmail img");
    mailLogo.src = "mail-logow.png";

    let githubLogo = document.querySelector(".github img");
    githubLogo.src = "github-logo.png";

    }







//DARK-MODE Function
let darkSwitch = () => {
    let body = document.querySelector('body');
    body.style.backgroundColor = "black";

    modeButton.style.backgroundColor = "black";
    let image = document.getElementsByClassName("display-img")[0];
    image.src = "dark.jpeg";
    modeButton.setAttribute("onclick", "lightSwitch()");

    //navbar
    let navItems = document.querySelectorAll(".menu a");
    navItems.forEach(item => {
        item.style.color = "white";
    })

    let homeText = document.querySelector(".text-2");
    homeText.style.color = "white";

    let aboutText = document.querySelectorAll(".right p");
    aboutText.forEach(text => {
        text.style.color = "white";
    })

    let resumebtn = document.querySelector(".resume");
    
    //resume button hover styling
    for (let sheet of document.styleSheets) {
        try {
          // Loop through all CSS rules in the stylesheet
          for (let rule of sheet.cssRules) {
            // Check if the rule matches the :hover selector for .menu a
            if (rule.selectorText === 'button.resume:hover') {
              // Update the hover style
              rule.style.color = 'white'; // Change hover color to black
              rule.style.backgroundColor = 'black';
            }
          }
        } catch (e) {
          // Catch and ignore CORS errors for external stylesheets
          console.warn("Unable to access some stylesheet rules due to CORS.");
        }
      }

    //skills items

    let skillImgs = document.querySelectorAll(".skills-content img");
    skillImgs.forEach( img => {
        img.style.backgroundColor = "rgba(84, 84, 84, 0.4)"
    })

    let skillTitles = document.querySelectorAll(".skills-content h3");
    skillTitles.forEach (title => {
        title.style.color = "rgba(216, 216, 216)";
    }
    )

    //contact-imgs
    let linkedinLogo = document.querySelector(".linkedin img");
    linkedinLogo.src = "linkedin.png";

    let mailLogo = document.querySelector(".gmail img");
    mailLogo.src = "gmail.png";

    let githubLogo = document.querySelector(".github img");
    githubLogo.src = "github-logow.png";
}
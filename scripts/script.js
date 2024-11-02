// listing elements
document
  .getElementById("resumeForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();

    // getting data of personal info section
    const nameElement = document.getElementById("name");
    const designationElement = document.getElementById("designation");
    const contactElement = document.getElementById("contact");
    const emailElement = document.getElementById("email");

    // getting data of educatiion section
    const educationElement = document.getElementById("education");

    // getting data of work-experience section
    const workExperienceElement = document.getElementById("workExperience");

    // getting data of skills section
    const listSkillsElement = document.getElementById("listSkills");

    if (
      nameElement &&
      designationElement &&
      contactElement &&
      emailElement &&
      educationElement &&
      workExperienceElement &&
      listSkillsElement
    ) {
      const username = nameElement.value;
      const designation = designationElement.value;
      const contact = contactElement.value;
      const email = emailElement.value;

      const education = educationElement.value;

      const workExperience = workExperienceElement.value;

      const listSkills = listSkillsElement.value;


      // Display Education details in new lines
      const educationDetails = education.split(",").map((edu) => edu.trim());
      const formattedEducation = educationDetails
        .map((edu) => `<p>${edu}</p>`)
        .join("");


      // Display Experiences details in new lines
      const experiences = workExperience.split(",").map((exp) => exp.trim());
      const formattedExperience = experiences
        .map((exp) => `<p>${exp}</p>`)
        .join("");


      // Display Skills details in new lines
      const skills = listSkills.split(",").map((exp) => exp.trim());
      const formattedSkills = skills.map((exp) => `<li>${exp}</li>`).join("");


      // Create resume output
      const resumeOutput = `
        <div class="main-profile">
            <h1 id="header-name">${username}</h1>
            <h3 id="header-description">${designation}</h3>
        </div>
       
        <div class="card-info">
            <h2>CONTACT</h2>
                <li><i class="fa fa-phone"></i>${contact}</li>
                <li><i class="fa fa-envelope"></i>${email}</li>
            
        </div>
        


         <div class="education">
                <h2>EDUCATION</h2>
                <div class="education-info">

                  <div class="education-details">
                    <p style="font-weight: 600;">${formattedEducation}</p>
                  </div>
                  
                </div>
        </div>

        


         <div class="experience">
                <h2>WORK EXPERIENCE</h2>
                <div class="work-experience-details">

                  <div class="experience-name">
                    <p style="font-weight: 600;">${formattedExperience}</p>
                  </div>
                  
                </div>
        </div>
        
        <div class="card-info">
        <h2>SKILLS</h2>
             <p>${formattedSkills}</p>
        </div>

        `;

      const resumeOutputElement = document.getElementById("resumeOutput");
      if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
        document.getElementById("downloadPdf").addEventListener("click", function () {
          const resume = document.getElementById("resumeOutput");

          
          // Check if the resume contains any visible text before trying to download
          if (resume.textContent.trim() === "") {
            console.error("Please generate the resume")
            alert("Please generate the resume first!");
          } 
          else {
            // Use html2pdf library to generate the PDF
            html2pdf().from(resume).save(`${username} Resume.pdf`);
          }
        });
        
      } else {
        console.error("the resume output elements are missing");
      }
    } else {
      console.error("one or more output elements are missing");
    }
  });



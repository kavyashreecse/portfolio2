
document.getElementById("downloadResumeBtn").addEventListener("click", function() {
  
    const resumeLink = document.createElement("a");
    resumeLink.href = "resume.pdf"; 
    resumeLink.download = "c:\Users\kavya\Downloads\Kavyashree G_23CS071 (1).pdf";
    resumeLink.click();
});



window.addEventListener('DOMContentLoaded', function() {
    function smoothScrollTo(target) {
      const element = document.querySelector(target);
      if (element) {
        const offset = 140; // Adjust this value to set the desired scroll offset
        window.scrollTo({
          behavior: "smooth",
          top: element.offsetTop - offset
        });
      }
    }
  
    // Example usage
    const button = document.querySelector('.btn');
    button.addEventListener('click', function(event) {
      event.preventDefault();
      smoothScrollTo('#third');
    });
  });
  
function showAlert() {
  alert("這個是假的,不過還是謝謝你的支持");
}

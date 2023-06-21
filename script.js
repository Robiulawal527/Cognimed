function submitForm() {
    var userInput = document.getElementById("userInput").value;
  
    // Perform any necessary processing or API calls with the user input
    
    // Example: Display a sample prescription result
    var prescriptionResult = "Prescription: Take ibuprofen 200mg twice a day for 3 days.";
    document.getElementById("prescriptionResult").textContent = prescriptionResult;
  }




   function startVoiceRecognition() {
      const userInput = document.getElementById('userInput');

      // Check if the browser supports speech recognition
      if ('webkitSpeechRecognition' in window) {
        const recognition = new webkitSpeechRecognition();

        // Set the recognition language
        recognition.lang = 'en-US';

        // Start the recognition
        recognition.start();

        // Handle recognition result
        recognition.onresult = function(event) {
          const transcript = event.results[0][0].transcript;
          userInput.value = transcript;
        };

        // Handle recognition error
        recognition.onerror = function(event) {
          console.error('Speech recognition error:', event.error);
        };
      } else {
        console.error('Speech recognition not supported');
      }
    }

    function submitForm() {
      // Handle form submission here
      // You can retrieve the health issues from the userInput textarea
    }
  

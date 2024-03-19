document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission
  
      // Validate the form fields
      const firstName = document.getElementById('inputEmail4').value.trim();
      const lastName = document.getElementById('inputPassword4').value.trim();
      const address = document.getElementById('inputAddress').value.trim();
      const description = document.getElementById('inputAddress2').value.trim();
      const city = document.getElementById('inputCity').value.trim();
      const state = document.getElementById('inputState').value.trim();
      const zip = document.getElementById('inputZip').value.trim();
  
      if (firstName === '' || lastName === '' || address === '' || description === '' || city === '' || state === '' || zip === '') {
        alert('Please fill out all fields');
        return;
      }
  
      // If all fields are filled, you can proceed with form submission
      // For now, let's just log the form data
      console.log('Form submitted:');
      console.log('First Name:', firstName);
      console.log('Last Name:', lastName);
      console.log('Address:', address);
      console.log('Description:', description);
      console.log('City:', city);
      console.log('State:', state);
      console.log('Zip:', zip);
  
      // You can send this data to a server using fetch or AJAX if needed
      // Example using fetch:
      /*
      fetch('https://example.com/submit', {
        method: 'POST',
        body: JSON.stringify({
          firstName,
          lastName,
          address,
          description,
          city,
          state,
          zip
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        console.log('Server response:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
      */
    });
  });
  
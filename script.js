function getFormvalue() {
  // Get the form element
  const form = document.getElementById("form1");

  // Get values of First Name and Last Name using their name attributes
  const firstName = form.elements["fname"].value;
  const lastName = form.elements["lname"].value;

  // Create the output message
  const fullName = `${firstName} ${lastName}`;

  // Display the output in an alert
  alert(fullName);

  // Prevent the default form submission behavior
  return false;
}

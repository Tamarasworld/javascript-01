function addAttendee() {
  let firstname = birthdayForm.firstname.value;
  let lastname = birthdayForm.lastname.value;

  if (firstname == "" || lastname == "") {
    alert("Full Name must be provided!");
    return false;
  }

  let name = firstname + " " + lastname;
  let ul = document.getElementsById("attendees");
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(name));
  ul.appendChild(li);

  return false; //keeps form from reloading so you dont lose info
}

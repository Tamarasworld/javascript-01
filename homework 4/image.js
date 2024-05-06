var imageCount = 0;

function displayImage() {
  var imageUrl = document.getElementById("imageUrl").value;
  var imageContainer = document.getElementById("imageContainer");
  var img = document.createElement("img");
  img.src = imageUrl;
  //imageContainer.innerHTML = ""; // Clear previous image (if any)
  imageContainer.appendChild(img);

  //update image counter
  imageCount++;
  document.getElementById("count").textContent = imageCount;
}

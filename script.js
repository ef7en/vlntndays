document.querySelector('.vbutton').addEventListener('click', function() {
    window.location.href = "https://open.spotify.com/";
});

document.querySelector('.vbutton2').addEventListener('click', function() {
    document.querySelector('.first-text').textContent = "Ending unlocked"; // Change h1 text
    document.querySelector('.second-text').style.display = "none"; // Hide second-text
    document.querySelector('.vbutton').style.display = "none"; // Hide vbutton
    document.querySelector('.vbutton2').style.display = "none"; // Hide itself

    // Wait 1 second before adding the new text
    setTimeout(function() {
        let newText = document.createElement("p");
        newText.textContent = "stay halal brother";
        newText.classList.add("rsyd-text"); // Add fade-in CSS class

        let emoji = document.createElement("span");
        emoji.textContent = "🙏";
        emoji.classList.add("emoji"); // Add fade-in emoji class
        emoji.style.opacity = "0"; // Initially hidden

        newText.appendChild(emoji);
        document.body.appendChild(newText);

        // After text fades in, make the emoji appear with a delay
        setTimeout(() => {
            emoji.style.opacity = "1";
        }, 1000);

        // Add the image after text and emoji appear
        setTimeout(() => {
            let img = document.createElement("img");
            img.src = "rosyid.jpg"; // Change this to your image path
            img.alt = "Halal Image";
            img.classList.add("fade-in-img"); // Add fade-in effect
            document.body.appendChild(img);
        }, 2500); // Image fades in after 2.5 seconds
    }, 1000);
});

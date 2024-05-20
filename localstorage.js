// Check if localStorage is supported
if (typeof(Storage) !== "undefined") {
    // Retrieve existing visitor count or initialize to 0
    let visitorCount = localStorage.getItem("visitorCount") || 0;

    // Increment visitor count
    visitorCount++;

    // Store updated visitor count
    localStorage.setItem("visitorCount", visitorCount);

    // Display visitor count on the page
    document.getElementById("visitorCount").innerText = visitorCount;
} else {
    console.log("localStorage is not supported.");
}

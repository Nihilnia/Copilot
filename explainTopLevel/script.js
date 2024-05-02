async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
    // Do something with the data
    data.forEach((post) => {
      const p = document.createElement("p");
      p.textContent = post.title;
      document.body.appendChild(p);
    });
  } catch (error) {
    console.log("Error:", error);
  }
}

fetchData();

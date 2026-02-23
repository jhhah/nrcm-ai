async function listModels() {
  const response = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models?key=AIzaSyCZ3rpza6o2E2MkJXI4f6zjc16xvIQgbNA"
  );
  const data = await response.json();
  data.models.forEach(m => console.log(m.name));
}

listModels();
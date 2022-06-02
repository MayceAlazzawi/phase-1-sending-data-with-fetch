// Add your code here
const p = document.getElementById('text');
const submitData =  (name, email) => {
  fetch('http://localhost:3000/users', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(
      { name: name,
        email: email
      }
    ),
  }).then(res => res.json())
  .then(obj => p.textContent = obj.id)
    .catch(e => {
      document.write(e.message); // This will generate an error message  
    }
    )
}
submitData('mayce', 'nabil')


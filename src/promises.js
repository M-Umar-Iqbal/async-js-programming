import { useEffect } from 'react';

function App() {
  const data = [
    //Array of Objects
    { name: 'Umar', profession: 'Software Engineer' },
    { name: 'Ali', profession: 'Software Developer' },
  ];
  function getData() {
    setTimeout(() => {
      let output = '';
      data.forEach((data, index) => {
        output += `<li>${data.name}</li>`;
      });
      document.body.innerHTML = output;
    }, 1000);
  }
  function createData(newData) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        data.push(newData);
        let error = false;
        if (!error) {
          resolve();
        } else {
          reject('Error Occurred');
        }
      }, 2000);
    });
  }

  useEffect(() => {
    createData({ name: 'Usman', profession: 'Software Developer' })
      .then(getData)
      .catch((err) => console.log(err));
  }, []);
  return (
    // Async Programming
    //Callbacks, promises, Async & Await
    <div className="App">
      <h1>running</h1>
    </div>
  );
}

export default App;

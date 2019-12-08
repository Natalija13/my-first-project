import React ,{ useState }from 'react';
import './App.css';



let itemsInitial = [
  {
  itemId: 'asdasd',
  name: 'smoki' 
}, {
  itemId: 'asdasd',
  name: 'leb'
}, {
  itemId: 'asdasd',
  name: 'salama'
}
];


function App() {


  const [items, setItems] = useState(itemsInitial);

  
 


  const addItem = () => {
  //go zemva inputot i go dodava na items
    let inputValue = document.getElementById('inp').value;
  
    setItems(items => [...items, {
    itemId: 'asfsdg',
    name: inputValue
  }])
  }

const removeItem = (name) => {
  // go brishi itemot

  setItems(items => items.filter(item => item.name !== name) );

} 

 
  return (
    <div className="">
      <div className="add">
        <input id="inp" placeholder="enter item here" ></input>
        <button onClick={e => addItem()}> add</button>
      </div>
      <div className="list" >
        mojata lista
      </div>
      <div className="produkti">
        {items.map(item =>
          <div className="item" key={Math.random()}>
            <button onClick={e=> removeItem(item.name)}> delete</button>
            <div>ID: {item.itemId}</div>
            <div className="name">Name: {item.name}</div>
          </div>)}
      </div>
    </div>
  );
}

export default App;

// crud 
// create - read - update - delete


// TODO item


// Example -> "da kupam smoki"

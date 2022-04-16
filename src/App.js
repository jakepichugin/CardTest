import axios from 'axios';
import { useEffect, useState, useRef, createRef } from 'react'
import {styles} from './styles'
import { exportComponentAsPNG } from 'react-component-export-image';

const githuburl = 'https://api.github.com/users'

const App = () => {

  const imgref = [];
  const [users, set_users] = useState([])

  useEffect(() => {
    axios.get(githuburl).then((res) => {
      set_users(res.data)
    }).catch((err) => { console.log(err)})
  }, [])

   const setRef = (ref) => {
    imgref.push(ref);
  };

  const getRef = (ref) => imgref.find(ref);

  return (
    <div style={styles.container}>
      {users.map((u)=>{
        return (
          <div ref={setRef} key={u.id} style={styles.card_container} onClick={(e) => exportComponentAsPNG(imgref[e])}> 
            <img src={u.avatar_url} style={styles.card_art}/>
            <div style={styles.card_name} > {u.login} </div>
            <div style={styles.card_text}>{u.html_url} </div>

            </div>
        )
      })}
    </div>
  );
}

export default App;

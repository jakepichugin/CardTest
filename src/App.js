import axios from 'axios';
import { useEffect, useState } from 'react'
import {styles} from './styles'
const githuburl = 'https://api.github.com/users'



const App = () => {

  const [users, set_users] = useState([])

  useEffect(() => {
    axios.get(githuburl).then((res) => {
      set_users(res.data)
    }).catch((err) => { console.log(err)})
  }, [])




  return (
    <div>
      {users.map((u)=>{
        return (
          <div style={styles.card_container}> 
            <img src={u.avatar_url} style={styles.card_art}/>
            <div>{u.login} </div>
            <div>{u.html_url} </div>

            </div>
        )
      })}
    </div>
  );
}

export default App;

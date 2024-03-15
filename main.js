// Import our custom CSS
import './styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import { getUsersUsingFetch } from './src/js/getUser'

const getUsers = async() =>{
  const users = await getUsersUsingFetch("https://reqres.in/api/users?page=2");
  console.log(users)
}

getUsers();
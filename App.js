import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'

const App = () =>{

    if (!localStorage.getItem('username')) return <LoginForm />;

    return(

        


        <ChatEngine
            height= "100vh"
            projectID ="60e455f3-4613-4b93-9e91-6d090ac6af58"
            userSecret = {localStorage.getItem('password')}
            userName ={localStorage.getItem('username')}
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    )
}

export default App;
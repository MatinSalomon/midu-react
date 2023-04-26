import { TwitterCard } from './TwitterCard.jsx'
import './app.css'

export function App() {
    return (
    <>
        <TwitterCard 
        userName='Reddit' 
        name='reddit'>

        </TwitterCard>
        
        <TwitterCard 
        isFollowing
        userName='Reddit' 
        name='reddit'>

        </TwitterCard>
        
        
        <TwitterCard 
        isFollowing = {false} 
        userName='Reddit' 
        name='reddit'>
            
        </TwitterCard>
    </>
    )
}
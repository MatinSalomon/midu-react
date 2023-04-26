import { useState } from "react"

export function TwitterCard ({ userName , name  }) {
    const [isFollowing, setIsFollowing] = useState(false)

   
    const text = isFollowing ? 'siguiendo' : 'seguir'
    const classBtn = isFollowing ? 'tw-followCard-button is-following ' : 'tw-followCard-button'
    
    const handleCLick = () => {
        setIsFollowing(!isFollowing)
    }

    return(
    <article className="tw-followCard">
        <header className="tw-followCard-header">
            <img className="tw-followCard-avatar " src={`https://unavatar.io/${userName}`} />
            <div className="tw-followCard-info">
                <strong className="tw-followCard-infoUserName">@{name}</strong>
                <span>@{userName}</span>
            </div>
        </header>

        <aside>
            <button 
            className= {classBtn}
            onClick={handleCLick}
            >
                {text}
                </button>
        </aside>
    </article>
    )
}
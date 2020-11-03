import React from 'react'
import '../CSS/holygrail.css'

function HolyGrail() {
    return (
        <div  >
             
         <header className = "flex-header">
             This is Header
            
         </header>
         <main className = "flex-main">
                 <nav className = "flex-nav">
                    Navigation
                 </nav>
                 <article className = "flex-article">
                    MainContent
                 </article>
                 <aside className= "flex-aside">
                     SideBar
                 </aside>
        </main>
        <footer className = "flex-footer">

        </footer>
        
        </div>
            
        
    )
}

export default HolyGrail

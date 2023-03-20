import React from 'react'
// import styles from './assets/css/sidebar.module.css'
function NewSidebarLeft() {
  return (
    <div className="nav" id="nav">
            <nav className="nav__content">
                <div className="nav__toggle" id="nav-toggle">
                    <i className='bx bx-chevron-right' ></i>
                </div>
    
                <a href="#" className="nav__logo">
                    <i className='bx bxs-heart' ></i>
                    <span className="nav__logo-name">Healthy</span>
                </a>
    
                <div className="nav__list">
                    <a href="#" className="nav__link active-link">
                        <i className='bx bx-grid-alt'></i>
                        <span className="nav__name">Dashboard</span>
                    </a>
    
                    <a href="#" className="nav__link">
                        <i className='bx bx-file'></i>
                        <span className="nav__name">Appointments</span>
                    </a>
    
                    <a href="#" className="nav__link">
                        <i className='bx bx-envelope' ></i>
                        <span className="nav__name">Messages</span>
                    </a>
    
                    <a href="#" className="nav__link">
                        <i className='bx bx-bar-chart-square' ></i>
                        <span className="nav__name">Statistic</span>
                    </a>
    
                    <a href="#" className="nav__link">
                        <i className='bx bx-cog' ></i>
                        <span className="nav__name">Settings</span>
                    </a>
                </div>
            </nav>
        </div>
  )
}

export default NewSidebarLeft
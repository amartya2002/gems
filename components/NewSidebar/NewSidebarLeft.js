import React from 'react'
// import styles from './assets/css/sidebar.module.css'
function NewSidebarLeft() {
  return (
    <div class="nav" id="nav">
            <nav class="nav__content">
                <div class="nav__toggle" id="nav-toggle">
                    <i class='bx bx-chevron-right' ></i>
                </div>
    
                <a href="#" class="nav__logo">
                    <i class='bx bxs-heart' ></i>
                    <span class="nav__logo-name">Healthy</span>
                </a>
    
                <div class="nav__list">
                    <a href="#" class="nav__link active-link">
                        <i class='bx bx-grid-alt'></i>
                        <span class="nav__name">Dashboard</span>
                    </a>
    
                    <a href="#" class="nav__link">
                        <i class='bx bx-file'></i>
                        <span class="nav__name">Appointments</span>
                    </a>
    
                    <a href="#" class="nav__link">
                        <i class='bx bx-envelope' ></i>
                        <span class="nav__name">Messages</span>
                    </a>
    
                    <a href="#" class="nav__link">
                        <i class='bx bx-bar-chart-square' ></i>
                        <span class="nav__name">Statistic</span>
                    </a>
    
                    <a href="#" class="nav__link">
                        <i class='bx bx-cog' ></i>
                        <span class="nav__name">Settings</span>
                    </a>
                </div>
            </nav>
        </div>
  )
}

export default NewSidebarLeft
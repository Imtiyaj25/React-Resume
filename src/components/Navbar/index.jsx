import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav class = "navbar bg-white">
            <div class="container">
                <div class = "navbar-content">
                    <div class = "brand-and-toggler">
                        <a href = "index.html" class = "navbar-brand">
                            <img src = "assets/images/curriculum-vitae.png" alt = "" class = "navbar-brand-icon"/>
                            <span class = "navbar-brand-text"/>build <span>resume.</span>
                        </a>
                        <button type = "button" class = "navbar-toggler-btn">
                            <div class = "bars">
                                <div class = "bar"></div>
                                <div class = "bar"></div>
                                <div class = "bar"></div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
// src/App.jsx
import React from 'react';
import './App.css'; // Assuming your custom CSS for the navbar will go here

function App() {
  const username = "adnankattekaden43"; // Placeholder for now

  return (
    
    <div className="page-wrapper">

      <div className="blur-background"></div>
      <nav className="navbar">
        <div className="navbar-left">
          <img src="/assets/logo.png" alt="Logo" className="navbar-logo" />
          <h1>MakeMyPass</h1>
        </div>
        <div className="navbar-right">
          <span className="username">Hi, {username}</span>
          <img src="/assets/user-icon.jpg" alt="User Icon" className="user-icon" />
        </div>
      </nav>

      <div className="container-1">
        <div className="container-1-left">
          <button className="transparent-btn">
            <img src="/assets/left-arrow-icon.svg" alt="Left Arrow" />
          </button>
          <img src="/assets/demo.png" alt="Demo Icon" className="demo-icon" />
          <h2 className="heading">Paradox Productions Meet-Up</h2>
          
        </div>

        <div className="view-docs">
          <img src="/assets/docs.svg" alt="Docs Icon" />
          <span>View docs</span>
        </div>
      </div>

      

      <div className="container-2">
        <span className="menu-item">Overview</span>
        <span className="menu-item">Insights</span>
        <span className="menu-item active">Guests</span>
        <span className="menu-item"> | </span>
        <span className="menu-item">Event Page Form-Builder</span>
        <span className="menu-item"> | </span>
        <span className="menu-item">Scan QR In-Event</span>
        <span className="menu-item">|</span>
        <span className="menu-item">Logs</span>
        <span className="menu-item">Finance</span>
        <span className="menu-item"> | </span>
        <span className="menu-item">Post Event</span>
        <span className="menu-item"> | </span>
        <span className="menu-item">Child Events</span>
      </div>

      <div className='container-3'> 

        <span> At a Glance </span>
        <span> Last Registered 1st May at 7:42 PM </span>
      </div>

      <div className="seperator">
      <hr/>
      </div>

      <div className="container-4">
        <div className="left-text">
          <span className="number">80</span>
          <span className="label">unique guests</span>
        </div>
        <div className="right-text">
          <span className="number">59</span>
          <span className="label">shortlisted</span>
          <span className="number">11</span>
          <span className="label">unclaimed</span>
        </div>
      </div>

      <div className="container-5">
        <div className="bar purple"></div>
        <div className="bar green"></div>
        <div className="bar gray"></div>
        <div className="bar blue"></div>
      </div>

      <div className="container-6">
        <span style={{ color: '#b37ade' }}>• (280) Special Ticket</span>
        <span style={{ color: '#2EAF6D' }}>• (3) Demo Paid Ticket</span>
        <span style={{ color: '#E6E8EC' }}>• (4) Hackathon</span>
        <span style={{ color: '#7C9BF2' }}>• (50) New Ticket</span>
      </div>

      <div className="container-7">
        <button className="action-btn">
          Dropped Users
          <img src="/assets/dropped.png" alt="Dropped" />

        </button>
        <button className="action-btn">
          Blacklisted Users
          <img src="/assets/blacklisted.png" alt="Blacklisted" />

        </button>
        <button className="action-btn">
          Export Data
          <img src="/assets/export.png" alt="Export" />

        </button>
        <button className="action-btn">
          Add Guest
          <img src="/assets/add.png" alt="Add" />

        </button>
      </div>

      <div className='container-8'>
        <span> Guests List </span>
      </div>

      <div className="container-9-wrapper">
        <div className="container-9">
          <img src="/assets/search.png" alt="search-icon" />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="container-10">
        <div className="container-10-left">
          <span> Recent Guests(30) </span>
        </div>

        <div className="container-10-right">
          <button className="normal">Select Multiple</button>

          <button className="normal arrow">
            Checked In
            <span className="arrow-end">
              | <img src="/assets/down-arrow.png" alt="down-arrow-icon" />
            </span>
          </button>

          <button className="normal arrow">
            Approval Status
            <span className="arrow-end">
              | <img src="/assets/down-arrow.png" alt="down-arrow-icon" />
            </span>
          </button>

          <button className="normal arrow">
            Registration Status
            <span className="arrow-end">
              | <img src="/assets/down-arrow.png" alt="down-arrow-icon" />
            </span>
          </button>
        </div>

      </div>
      <div className="container-11-wrapper">
      <div className="container-11">
        {[
          { name: "Ananthu M.P", username: "chn21ec019", time: "5 days ago", icon2: "icon2a", icon4: "icon4a" },
          { name: "Aro Ann", username: "Aroann23", time: "5 days ago", icon2: "icon2a", icon4: "icon4a" },
          { name: "Ananthu M P", username: "chn21ec019", time: "2 weeks ago", icon2: "icon2a", icon4: "icon4a" },
          { name: "Ananthu M P", username: "ananthu.mp333", time: "2 weeks ago", icon2: "icon2a", icon4: "icon4a" },
          { name: "Aswin Asok", username: "aswinasokofficial", time: "3 weeks ago", icon2: "icon2a", icon4: "icon4a" },
          { name: "Ananthu M P", username: "chn21ec019", time: "3 weeks ago", icon2: "icon2b", icon4: "icon4b" },
          { name: "Aro Ann", username: "Aroann23", time: "4 weeks ago", icon2: "icon2b", icon4: "icon4a" },
          { name: "Aswin Asok", username: "aswinasokofficial", time: "4 weeks ago", icon2: "icon2a", icon4: "icon4a" },
        ].map((item, index) => (
          <div key={index} className="container-11-row">
            <div className="left">
              <span className="name">{item.name}</span>
              <span className="username">{item.username}</span>
            </div>
            <div className="right">
              <span className="time">{item.time}</span>
              <img src="/assets/icon1.png" alt="icon1" />
              <img src={`/assets/${item.icon2}.png`} alt="icon2" />
              <img src="/assets/icon3.png" alt="icon3" />
              <img src={`/assets/${item.icon4}.png`} alt="icon4" />
            </div>
          </div>
        ))}
      </div>
      </div>

      <div className="container-12">
        <div className="records">69 Records</div>
        <div className="per-page">Per Page: 30</div>
        <div className="pagination">
          <span>1 of 3</span>
          <img src="/assets/backward-arrow.svg" alt="backward" />
          <img src="/assets/forward-arrow.svg" alt="forward" />
        </div>
      </div>

      <footer className="footer">
        <img src="/assets/hoomans.png" alt="Hoomans Logo" className="footer-left" />
        <div className="footer-right">
          <img src="/assets/instagram.png" alt="Instagram" />
          <img src="/assets/linkedin.png" alt="LinkedIn" />
          <img src="/assets/x.png" alt="X" />
          <img src="/assets/telegram.png" alt="Telegram" />
        </div>
      </footer>






      



    </div>
  );
}

export default App;

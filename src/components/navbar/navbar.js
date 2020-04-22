import React, {Component} from 'react';
import './navbar.css';
import { Link } from "react-router-dom";
class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      navActive : 'nav-active',
      world: '/world',
      vietnam: '/vietnam'
    }
  }

  activeRoute(route) {
    let current_path = window.location.pathname;
    //world is default home page path
    if(route === current_path ||
        (route === this.state.world && current_path === '/')){
      return this.state.navActive;
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className='nav-bar'>
        <section>
          <nav className="shift">
            <ul>
              <li><Link to={this.state.world} className={this.activeRoute(this.state.world)}>World</Link></li>
              <li><Link to={this.state.vietnam} className={this.activeRoute(this.state.vietnam)}>Viet Nam</Link></li>
            </ul>
          </nav>
        </section>
      </div>
    );
  }
}

export default Navbar;
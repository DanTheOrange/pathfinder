import React, { Component, Fragment } from 'react';
import Character from './components/character';
import classes from './classes'
import './app.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    const maxLevel = 20;

    this.state = {
      maxLevel,
      view: 'horizontal', // 'vertical' or 'horizontal'
      levels: Array(maxLevel).fill({charClass: ''})
    };
  }

  toggleView = () => {
    this.setState({
      view: this.state.view === 'vertical' ? 'horizontal' : 'vertical'
    });
  };

  setClass = (charClass, selectedLevels) => {
    // I really need to figure out how I'm going to handle levels altering and stacking.

    this.setState({
      levels: this.state.levels.map((level, i) => {
        if (selectedLevels.includes(i + 1)) {
          return { ...level, charClass };
        }
        return { ...level };
      })
    });
  };

  render() {
    const { view, levels } = this.state;

    return (
      <Fragment>
        <header>
          <h1>Pathfinder Character Creator</h1>
          <button className="view-toggle" onClick={this.toggleView}>
            toggle view ({view})
          </button>
        </header>
        <Character className={view} maxLevel={20} levels={levels} setters={{ 
          class: this.setClass,
          race: this.setRace
        }} />
      </Fragment>
    );
  }
}

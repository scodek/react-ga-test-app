import React from 'react';
import './App.css';
import ReactGA from 'react-ga';

function App() {

  const TRACKING_ID = "285414846"; 
  ReactGA.initialize(TRACKING_ID);
  
  const [randomQuote, setRandomQuote] = React.useState('Hello Tester !');
  const [randomColor, setRandomColor] = React.useState('#4d79ff');
  const divStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
    const randomQuoteArr = [
    {
      'quote': 'What you are seeking, is seeking you',
      'color': '#cc4400'
    },
    {
      'quote': 'Stay close to people who feels like Sunshine',
      'color': '#196619'
    },
    {
      'quote': 'I donot believe in ghosts, in darkness I\'m just a little bit optimistic',
      'color': '#662200'
    },
    {
      'quote': 'Ofcourse I talk to myself! Sometimes I need expert advice !!!',
      'color': '#ff8000'
    },
    {
      'quote': 'Life is not a fairy tale. If you lose your shoe at midnight, you\'re drunk',
      'color': '#800040'
    },
    {
      'quote': 'We only die once, we live everyday',
      'color': '#003d4d'
    },
  ];
  const handleClick = () => {
    const index = (Math.floor(Math.random() * 10)) % randomQuoteArr.length;
    setRandomQuote(randomQuoteArr[index]['quote']);
    setRandomColor(randomQuoteArr[index]['color']);
  }
  return (
    <div style={divStyle}>
        <h2>This a test site for Google Analytics</h2>
        <div>
            <div style={divStyle}>
                <h4 style={{color: randomColor}}>{randomQuote}</h4>
                <button style={{backgroundColor: randomColor, color: 'white'}} onClick={handleClick}>Click Me!</button>
            </div> 
        </div>
        <div>
          <p>Didn't like the quote??? Let's drink some <a target="_blank" href="https://www.google.com/search?q=how+not+to+be+grumpy&rlz=1C1GCEV_en&sxsrf=AOaemvJ1wHBQKSdo0aS2FRcfRPdAyyc-8A%3A1630946920877&ei=aEY2Yd3bNIyTxc8Pgeu0CA&oq=how+not+to+be+grumpy&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEMsBMgUIABDLATIFCAAQywEyBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjoKCC4QsAMQJxCTAjoHCAAQsAMQHjoJCAAQsAMQCBAeOgQIIxAnOgYIIxAnEBM6BAguEEM6BAgAEEM6CwguEIAEEMcBEKMCOgcILhAnEJMCOgsIABCABBCxAxCDAToOCC4QgAQQsQMQxwEQowI6BQguEIAEOhEILhCABBCxAxCDARDHARDRAzoICC4QgAQQkwI6BQgAEIAEOgUILhDLAUoFCDwSATFKBAhBGAFQxa8BWODXAWCI6QFoAXAAeACAAboBiAH1EJIBBDExLjmYAQCgAQHIAQjAAQE&sclient=gws-wiz&ved=0ahUKEwjdr_be5uryAhWMSfEDHYE1DQEQ4dUDCA4&uact=5">Elixir of hapiness</a></p>
        </div>

    </div>
  );
}

export default App;

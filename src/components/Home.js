import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n/config';
import germany from '../images/germany.png';
import us from '../images/us.png';
import ReactGA from 'react-ga';

const Home = () => {

    const { t } = useTranslation();
    const langOptions = {
      us: 'us',
      de: 'de'
    };
  const [currLanguage,setcurrLanguage] = React.useState(langOptions.us);
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

    const onLanguageChange = () => {
        const changedLang = changeLangTo(currLanguage);
        setcurrLanguage(changedLang);
        i18n.changeLanguage(changedLang);
      }
    
      const changeLangTo = (currLanguage) => (currLanguage === langOptions.us? langOptions.de: langOptions.us);
      const handleClick = () => {
        ReactGA.event({
            category: 'Button',
            action: 'On click a random quote is generated',
        });
    

        

        

        const index = (Math.floor(Math.random() * 10)) % randomQuoteArr.length;
        ReactGA.event({
            category: 'Quote',
            action: 'new quote new colour',
            label: randomQuoteArr[index]['quote']
        });

        setRandomQuote(randomQuoteArr[index]['quote']);
        setRandomColor(randomQuoteArr[index]['color']);
      }
    
      const titleDiv = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      };

    return (
        <div style={divStyle}>
          <div style={titleDiv}>
            <h2>{t('title')}</h2>
            <div style={{cursor: 'pointer'}} onClick={() => onLanguageChange()}> 
                <img src={currLanguage === langOptions.us ? us: germany} width="40" height="25" alt="image"/>
            </div> 
          </div>
          <div>
              <div style={divStyle}>
                  <h4 style={{color: randomColor}}>{randomQuote}</h4>
                  <button style={{backgroundColor: randomColor, color: 'white'}} onClick={handleClick}>{t('clickButton')}</button>
              </div> 
          </div>
          <div>
            <p>{t('clickLink1')} <a target="_blank" href="https://www.google.com/search?q=how+not+to+be+grumpy&rlz=1C1GCEV_en&sxsrf=AOaemvJ1wHBQKSdo0aS2FRcfRPdAyyc-8A%3A1630946920877&ei=aEY2Yd3bNIyTxc8Pgeu0CA&oq=how+not+to+be+grumpy&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEMsBMgUIABDLATIFCAAQywEyBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjoKCC4QsAMQJxCTAjoHCAAQsAMQHjoJCAAQsAMQCBAeOgQIIxAnOgYIIxAnEBM6BAguEEM6BAgAEEM6CwguEIAEEMcBEKMCOgcILhAnEJMCOgsIABCABBCxAxCDAToOCC4QgAQQsQMQxwEQowI6BQguEIAEOhEILhCABBCxAxCDARDHARDRAzoICC4QgAQQkwI6BQgAEIAEOgUILhDLAUoFCDwSATFKBAhBGAFQxa8BWODXAWCI6QFoAXAAeACAAboBiAH1EJIBBDExLjmYAQCgAQHIAQjAAQE&sclient=gws-wiz&ved=0ahUKEwjdr_be5uryAhWMSfEDHYE1DQEQ4dUDCA4&uact=5">{t('clickLink2')}</a></p>
          </div>

      </div>
    );

}

export default Home;
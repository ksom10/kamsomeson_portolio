import React from 'react';
import './Showcase.css';
import { Link } from 'react-router-dom';

function Showcase() {
  return (
    <div className='showcase'>
        <div className='showcase-container'>
            <div className='showcase-box'>
            <Link className='links' to='https://chatbox-92db1.web.app/'>
              <h1>Chatbox</h1>
              <p>Chatbox is a social media app that allows users to share photos and videos with their friends and followers.</p>
              </Link>
            </div>
            <div className='showcase-box'>
            <Link className='links' to='https://crud-tutorial-efe1b.web.app/'>
              <h1>Kitchen <br></br> Chronicles</h1>
              <p>Kitchen Chronicles is a CRUD application that allows users to post new recipes, as well
                as discover the delicious meals others are enjoying!
              </p>

            </Link>
            </div>
            <div className='showcase-box'>
            <Link className='links' to='https://react-recipe-f4fdd.web.app/'>
              <h1>Hive Mind</h1>
              <p>Hive Mind is a groupchat app that allows users to sign up an contribute in the groupchat made for all users!</p>
            </Link>
            </div>
            
        </div>
        <div className='showcase-container'>
            <div className='showcase-box'>
            <Link className='links' to='https://ksom10.github.io/symbiotic/index.html'>
              <h1>Symbiotic</h1>
              <p>Symbiotic is a decision based video game that teaches the harmful effects of adverse drug reactions.</p>
            </Link>
            </div>
            <div className='showcase-box'>
            <Link className='links' to='https://ksom10.github.io/fightinggame/'>
              <h1>Shinobi<br></br> Showdown</h1>
              <p>Shinobi Showdown is a JavaScript 2-player fighting game where users battle eachother using ninjas!</p>
            </Link>
            </div>
            <div className='showcase-box'>
            <Link className='links' to='https://friendlyeats-9cea5.web.app/'>
              <h1>The Eagles <br></br> Nest</h1>
              <p>The Eagles Nest is a fan made clone of the Philadelphia Eagles website.</p>
            </Link>
            </div>
        </div>
    </div>
  )
}

export default Showcase
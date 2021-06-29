import * as React from "react";
import Layout from "../components/Layout";
import SmallCardSlider from "../components/SmallCardSlider";

const Demo = () => {

  // React.useEffect(() => {

  //     const items = [...document.getElementsByClassName('list__item')];
  //     const containerElem = document.getElementById('containerElem');
  //     const leftSideOfContainer = containerElem.getBoundingClientRect().left;
  //     const listElem = document.getElementById('list');
  //     let currentLeftValue = 0;
    
  //     // Kick off for the animation function.
  //     window.setInterval(animationLoop, 30);
    
  //     /* 
  //       Looks at first item in the list and checks if it goes out of the visible area 
  //       by comparing the right position of the first list item to the left position 
  //       of the containing element. 
  //     */
  //     function animationLoop() {
  //       const firstListItem = listElem.querySelector('.list__item:first-child');
    
  //       let rightSideOfFirstItem = firstListItem.getBoundingClientRect().right;
    
  //       /* 
  //         If first list item is out of viewable area, move it to the end of the list. 
  //         Also, set the current left value to -1 so we won't stutter.
  //       */
  //       if (rightSideOfFirstItem < 0) {
  //         currentLeftValue = -1;
  //         listElem.appendChild(firstListItem);
  //       }
        
  //       listElem.style.marginLeft = `${currentLeftValue}px`;
  //       currentLeftValue--;
  //     }
  

  // }, []);
  
  return (
    <Layout>
      <SmallCardSlider />
      {/* <div className="wrap wrap--text">
        <h1>Infinitely scrolling 'marquee' (Vanilla JS/ES6)</h1>
        <p>Built to contain a lot of logo's that needed to scroll past slowly without stopping. Logo's that move out of view are moved to the back of the list.</p>
      </div>

      <div className="wrap wrap--logobar" id="containerElem">
        <ul className="list" id="list">
          <li className="list__item">logo 1</li>
          <li className="list__item">logo 2</li>
          <li className="list__item">logo 3</li>
          <li className="list__item">logo 4</li>
          <li className="list__item">logo 5</li>
          <li className="list__item">logo 6</li>
          <li className="list__item">logo 7</li>
          <li className="list__item">logo 8</li>
        </ul>
      </div> */}

    </Layout>
  )
}

export default Demo;

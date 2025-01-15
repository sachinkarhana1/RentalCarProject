import headerlogo from '../assets/SEATAC_RENTAL_1_logo.png'
import humburger from '../assets/humburgerAllThreeIcon.jpg'
import user  from '../assets/usermain.png'


export default function getHeaderHtml() {
    return `
    <header>
    <div class="logo">
     <img src="${headerlogo}"  alt="header logo" />
    </div>
    <div class="headerUserBox">
    
      <div class="HeaderHumburger">
         <img src="${humburger}" alt="huburger logo">
      </div>
      <div class="HeaderUserLogo">
        <img src="${user}"   alt="user logo">
      </div>
      <div class="button">CREATE AN ACCOUNT FOR GUEST</div>
    </div>
</header>
    `;
}

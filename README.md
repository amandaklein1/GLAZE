<br />
<p align="center">
  <h1 align="center">GLAZE</h1>

  <p align="center">
    A resource for ceramic enthusiasts.
    <br />
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about">About The Project</a>
      <ul>
        <li><a href="#stack">Built With</a></li>
      </ul>
    </li>
    <li><a href="#home-page">Home Page</a></li>
    <li><a href="#let's-fire">Let's Fire</a></li>
    <li><a href="#let's-glaze">Let's Glaze</a></li>
    <li>
    <a href="#workflow">Workflow</a>
     <ul>
      <li><a href="#trello">Trello</a></li>
     </ul>
    </li>
    <li>
     <a href="#development">Development</a>
     <ul>
      <li><a href="#repo">Repo</a></li>
      <li><a href="#install">Install</a></li>
      <li><a href="#start-scripts">Start Scripts</a></li>
      <li><a href="#google-maps-api-key">Google Maps API Key</a></li>
     </ul>
    </li>
  </ol>
</details>

# About

The objective of the GLAZE website was to make a user friendly site that provided detailed instructions for any item the user clicked on. I was given two days to create the application. The site is comprised of the features detailed below.

## Home Page

**Features:**

- _Nav Bar_: The user can select LET'S FIRE or LET'S GLAZE to be directed to a separate page. These pages have a YouTube video to instruct them how to fire our glaze their ceramic creations. They can also click on the GLAZE logo which will direct them back to the home page.
- _SVGs_: The user can select any item on the page they would like to learn how to construct. When clicking on the item a YouTube video modal will appear. The user can exit out of the video when they are done with the video.
- _Routing_: Utilizing React Router, the URL will change based on the page the user is on.

![](https://media.giphy.com/media/PSlvtH3qUnG03QxrxG/giphy.gif)

## Let's Fire

**Features:**

- _Let's Fire_: When the user selects LET'S FIRE from the navigation bar, they will be directed to a new page with a video instructing them how to fire their masterpiece. 

![](https://media.giphy.com/media/NSEGNz5RxRJ1oQOyJo/giphy.gif)

## Let's Glaze

**Features:**

- _Let's Glaze_: When the user selects LET'S GLAZE from the navigation bar, they will be directed to a new page with a video instructing them how to glaze their masterpiece. 

![](https://media.giphy.com/media/HKrmnc4vpVmEh2FCyo/giphy.gif)

# Stack

<table>
  <tbody>
    <tr>
      <th>Frontend Languages</th>
      <td>
        <img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />
         <img alt="HTML" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white" />
         <img alt="CSS" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white" />
      </td>
    </tr>
    <tr>
      <th>Frameworks & Libraries</th>
      <td>
        <img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB" />
        <img alt="Express.js" src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" />
      </td>
    </tr>
        <tr>
      <th>Backend Languages</th>
      <td>
        <img alt="MySQL" src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white"/>
      </td>
    </tr>
    <tr>
      <th>Utilities</th>
      <td>
        <img alt="Webpack" src="https://img.shields.io/badge/webpack%20-%2320232a.svg?&style=for-the-badge&logo=webpack&logoColor=%2361DAFB" />
        <img alt="Babel" src="https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black" />
        <img alt="ESLint" src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white" />
        <img alt="Git" src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" />
      </td>
    </tr>
     <tr>
      <th>Workflow</th>
      <td>
        <img alt="Github" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/>
        <img alt="Trello" src="https://img.shields.io/badge/Trello-%23026AA7.svg?&style=for-the-badge&logo=Trello&logoColor=white"/>
      </td>
    </tr>
    <tr>
      <th>Deployment</th>
      <td>
        <img alt="Docker" src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white"/>
        <img alt="AWS" src="https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white" />
      </td>
    </tr>
  </tbody>
</table>

# Workflow

## Trello

A Trello board was used to create and track tickets.

# Development

## Repo

`git clone https://github.com/amandaklein1/GLAZE.git`

## Install

`npm install`

## Start Scripts

```
npm start
npm run build
```

## YouTube API Key

To properly render the YouTube videos, you must create a YouTube API token and place it into youtube.js within the config directory.

To create an API key:

1. Go to: https://console.cloud.google.com/project/_/apiui/credential
2. On the credentials page, click Create credentials > API Key.
   The API key created dialog displays your newly created API key.
3. Click Close.
   The new API key is listed on the Credentials page under API keys.
   (Remember to restrict the API key before using it in production.)

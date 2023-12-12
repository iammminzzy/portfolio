<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
🚀
  <h3>Portfolio</h3>
    <img src="https://github.com/iammminzzy/portfolio/assets/104430030/7717e1cf-2e0e-492f-b832-a6cb8273dbb0" alt="Demo" width="750" height="396">
    <br />
    <br />
    <a href="https://minjee.vercel.app/"><strong>View »</strong></a>
</div>
<br />
<br />
<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#built-with">Built With</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

 <p>This is a portfolio site showcasing my journey and experiences as a frontend developer.<br />
      Leveraging the <strong>latest features of Next.js 13</strong>, including App Router and Server Actions, the site is constructed.<br />
      The styling is done using <strong>Tailwind CSS and Framer Motion</strong>, with the addition of email sending function through Resend.<br />
      Of course, it's designed as a responsive page, feel free to explore my page on both <strong>desktop and mobile devices</strong>!</p>

<!-- BUILT WITH -->

## Built With

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white)&nbsp;
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white)&nbsp;
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)&nbsp;
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=TailwindCSS&logoColor=white)&nbsp;
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=ESLint&logoColor=white)&nbsp;
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=Vercel&logoColor=white)&nbsp;

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

1. Get a Resend API Key at [https://resend.com/api-keys](https://resend.com/api-keys)
2. Clone the repo
   ```sh
   git clone https://github.com/iammminzzy/portfolio.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Create & enter your API in `.env.local`
   ```js
   NEXT_PUBLIC_RESEND_API_KEY= = "ENTER YOUR API";
   ```
5. Change the "myMail" to your own email address in the `SendEmail.ts` action file
   ```js
   const myMail = "ENTER YOUR OWN EMAIL ADDRESS";
   ```
6. Start the development server
   ```sh
   npm run dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Minjee Son - [@CV](https://docs.google.com/document/d/1zpXI_ZdCXFcY6tfKdABwmsJEuToYAy7cf42vugQF64k/edit#heading=h.5rf9wr4r3no2) - minjeeson.dev@gmail.com

Project Link: [https://github.com/iammminzzy/portfolio](https://github.com/iammminzzy/portfolio)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

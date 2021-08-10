# Next.js + Tailwind CSS Restaurant Website

A website I've created for a local Persian restaurant, constructed with create-next-app - featuring NextJS, tailwindCSS and Hooks to build out this responsive single page website. 

## Lessons Learned

This project really allowed me to do a deeper dive into how NextJS works as a development framework. By spending lots of time researching through the docs, I learned how NextJS handles images and how the routing via the ```<Link>``` tag works. 

This was also the first time I used @tailwding/jit mode in one of my builds, which helped me push my understanding of the styling framework.

One particular request from the restaurant owner was that there would be "Call Us" buttons embedded into the website. I had to learn how to implement these using the ```<Link>``` tag and and href.

Finally, within my responsive design, I wanted to display different navbars based on the screen size of the user. I wanted to do this via conditional rendering. My first attempt at this was using React Hooks, as detailed in this [StackOverflow post.](https://stackoverflow.com/questions/46586165/react-conditionally-render-based-on-viewport-size) Unfortunatly, I found that NextJS has a problem accessing ```window.innerWidth```, and throws and error when trying to access this property. I was forced to look for another solution to my conditional, an finally found one which I implemented [like so.](https://github.com/no1atall/simurgh/blob/main/components/Navbar.jsx) 


## Potential Future Features

* DoorDash and Uber Eats integration to facilitate online ordering, order flow, and boost sales
* A custom order page through which customers could place orders directly on the website, pay for their food, and recieve an email confirmation of their order with a pickup time. This would also be to boost sales and generate more revenue.
* Integaration of Google Maps API to make locating the restaurant easier
* Integration of Google Analytics to guide site optimiztaion, SEO optimization, and track performance of the website.

## Deployment
This website is hosted on [Netlify](https://www.netlify.com/).
The domain name is provided by [namecheap](https://www.namecheap.com/) and the SSL Certificate is provided by Let’s Encrypt through [Netlify](https://www.netlify.com/)

## Live Website
The live website can be viewed [here](https://simurgh.netlify.app/)

## Get Started

From your command line, first clone this repo:

```bash
# Clone this repository
$ git clone https://github.com/no1atall/simurgh

# Go into the repository
$ cd simurgh

# Remove current origin repository
$ git remote remove origin

```
Then you can install the dependencies using NPM:

Using NPM:

```bash
# Install dependencies
$ npm install

# Start development server
$ npm start
```
You should now have a development server running in your default browser.

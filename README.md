# Anime Eyebleach

### Project Description and Purpose

Anime Eyebleach is a React-typescript based web single-page-application designed to show you some beautiful anime inspired images to brighten up after a long day, maybe even find some new artists online that catch your eye and would like your support. 

> "After a long day of seeing what internet anonymity can do to people, you're bound to need some eye bleach."
quote by r/eyebleach.

It serves as a school study project in modern frontend practices, specifically handling asynchronous API data, local persistence, and stateful navigation.

-----

### Installation and Execution Instructions

1) Dowload the Repository

● Download the ZIP. file by clicking on <>Code

● Extract the ZIP

-----

OR

-----

1) Clone the Repository

● Go into your command prompt/Linux terminal and digit
```
    git clone https://github.com/ChrisFrizz/Anime_Eyebleach.git
```
-----

2) Go in the downloaded repository
```
    cd Anime_Eyebleach
```
-----

3) Ensure you have Node.js installed, then run:
```
    npm install
```
-----

4) Launch Development Server
```
    npm run dev
```
5) The application will load a localHost to then click on.

-----

### Description of the APIs Used

The project utilizes the [Nekosia API](https://nekosia.cat/) (v1), a RESTful service that provides structured JSON data for anime images.

-----

Hi there! Are you looking for the perfect API to enhance your project with adorable anime images? Or maybe you're interested in Anime Booru? You're in the right place!

Nekosia API is a versatile, free, and easy-to-integrate Anime API that offers a wide selection of images, including catgirls, foxgirls, and much more!

Whether you're building an app, a Discord bot, or a website, Nekosia API has everything you need to add a touch of anime magic to your project.

🤔 What Does Nekosia API Offer?
- An extensive collection of fully SFW anime images. See all main categories: https://nekosia.cat/categories
- API sessions that help avoid duplicate images
- Dominant colors of images (1 main color + 14 hex codes in each API response)
- Image compression without loss of quality
- Every image is tagged, making it easy to find exactly what you're looking for
- Additionally, we also have our own Anime Booru: https://nekosia.cat/booru

Nekosia API is completely free and available without registration, making it the ideal choice for developers at any skill level. Start exploring the sweetness of nekos today! Meow~~ 😺💗

🌍 Official Nekos Website: https://nekosia.cat

💬 Join our Discord: https://discord.gg/pba76vJhcP

#anime #animeapi #api #cute #catgirl #catgirls #animebooru #booru #neko #nekos #uwu #owo #cuteimages #cuteanimegirls

-----

Also the project utilizes JSONPlaceholder to simulate POST calls.

https://jsonplaceholder.typicode.com/

-----

### Credentials / Mocks (if applicable)

● Authentication: The app currently uses a "Soft Login" system. No backend credentials are required; the Login.tsx page captures a username and passes it through the React Router state.

● Mock Endpoint: The Post.tsx page utilizes https://jsonplaceholder.typicode.com/posts to simulate the submission of new community images, providing a safe environment to test POST request logic.

-----

### Project Structure

The project follows a component-based architecture organized by responsibility:

    /pages: Contains top-level route components 
        (Home, Login, PopularTags, MyCollection, RandomImage, Post, PageNotFound).tsx

    /components: Reusable UI elements such as LikeButton.tsx and TagButton.tsx

    /logic: Utility files for storage management (Favorites.tsx).

    /interface: API response interface (INekosiaResponse.tsx)

-----

### List of Completed Features

[x] Tag-Based Filtering: Users can load an image by clicking on specific tag button.

[x] Random Discovery: Automatic fetching of a new image upon loading the RandomImage page.

[x] Quality Switching: Real-time toggling between high-definition (original) and optimized (compressed) images to save bandwidth.

[x] Favorites System: Persistent image viewing using localStorage that allows users to "Like" images and view them later in myCollection.

[x] Dynamic Routing: Implementation of "protected-style navigation" where the myCollection page requires a username from the Login page.

[x] Optimized Fetching: Integration of tan-stack-query to handle caching and prevent redundant API calls when the window is minimized.

-----

### Known issues

[ ] The Login state doesn't persist after changing upon change of route, so every time the user enters myCollection it redirects them to the Login page.

-----

### About me: 

Hello there, I am Chris, italian "programmer" moving its first steps in react based environments. 

After an _INCREADIBLY_ failed attempt at a d&d character creation react SPA I decided to change the already broken ship's course to this project after scrolling through the free APIs list. 

Now after basically two weeks and two failed BG3 Honour Mode campaigns, I can release this project that I am proud of.

So if you scrolled this far and read the entirety of the README, first of: what the hell are you doing, nobody reads this, go find something better to do/better GitHub projects to use; 

second of all: thank you for your attention and have a wonderful day.

Chris.

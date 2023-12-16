# media-watchlist

## Project setup

```
Run npm install after cloning the repo or extracting from zip files
```

### Compiles and hot-reloads for development

```
npm run serve - this will run a localserver at the port 8080
```

### Compiles and minifies for production

```
npm run build
```

## Project Info

- This project uses Vue 2 and has been created using Vue CLI, with PWA, unit testing, es linting enabled

- It uses `https://rapidapi.com/DataCrawler/api/imdb188/` to make api calls

- Vue components skeletons have been created using vue-generate-component package, It can be installed globally and using command "vgc component_name", will create test file along with .vue, .js and .scss.

- this project also uses Vuetify - A Matrial design framework, and uses some components from it

- Formatting is enabled as soon as a file is saved, so that all the changes are in same format

## Project features

- Search field where user can select All, movies or Tv-series
- After getting the result, user can sort using IMDB rating
- User can add a particular movie in his watch list using heart Icon
- After clicking on the my watch list button, user can see all of his watchlist in the dialogbox

## Further immediate features

- Debouncing and fetching result addition as user keeps on typing
- Hide all the movie details from the movie card, Instead show them as a litlle zoomed when on hover (refer netflix)
- Create a header for showing my List instead of dialog, (refer netflix)
- Add different nav menu like Week Top10, Popular movies, popular tv shows, Whats Streaming(prime, hulu etc.)
- Refer all the public apis of <https://rapidapi.com/DataCrawler/api/imdb188/>

## Further features

- Implementing signup and login feature for users
- Pagination or infinite scroll can be implemented for the watchlist items in the dialog box
- Unit tests can be added in all the components
- Providing responsive design feature for mobile, ipad etc.
- SSR can be integrated in the project for the google BOT to make SEO friendly

# media-watchlist

## Project setup

- Run `npm install` after cloning the repo or extracting from zip files
- Run `npm run serve` - this will run a localserver at the port 8080
- This project uses `Vue 2`

## Project features

- Search field where user can search for movies and tv shows
- After getting the result, user can sort using year released
- when movie item is hovered, it zooms and displays additional info with favourite button, title year etc.
- User can add a particular movie in his watch list using favurite button `favourite`
- After clicking on the `My list` tab, user is bavigated to see his watchlist
- It uses `https://rapidapi.com/DataCrawler/api/imdb188/` to make api calls

- Vue components skeletons have been created using `vue-generate-component` package, It can be installed globally and using command "vgc component_name", will create test file along with .vue, .js and .scss.

- this project also uses `Vuetify` - A Matrial design framework, and uses some components from it

- Formatting is enabled as soon as a file is saved, so that all the changes are in same format

## Further immediate features

- Debouncing and fetching result addition as user keeps on typing
- Hide all the movie details from the movie card, Instead show them as a litlle zoomed when on hover (refer netflix)
- Create a header for showing my List instead of dialog, (refer netflix)
- Add different nav menu like Week Top10, Popular movies, popular tv shows, Whats Streaming(prime, hulu etc.)
- Refer all the public apis of <https://rapidapi.com/DataCrawler/api/imdb188/>
- remove dependency on vuetify, add your own custom components

## Further features

- Implementing signup and login feature for users
- Pagination or infinite scroll can be implemented for the watchlist items in the dialog box
- Unit tests can be added in all the components
- Providing responsive design feature for mobile, ipad etc.
- SSR can be integrated in the project for the google BOT to make SEO friendly

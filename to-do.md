# To do:
- ~~add a "Downloads" link to the footer; will link to a page that links to zine files (without having to load the whole zine page)~~
- ~~create the linked pages in the footer:~~
	- ~~Copyright~~
	- ~~Source Code~~
	- ~~Downloads~~
- ~~build the views for individual contributors and works~~
- ~~create optimized/navigable/pleasing to read layout for "read as zine" page~~
- FIGURE OUT HOW TO DO PARTIALS/TEMPLATES - I'm disinclined to update anything else in the header or footer or general page structure until I can do this without needing to update every HTML file by hand. There has to be an easy answer here.

- continue work on 'read as zine' section
- **add some sort of data structure to hold work and contributor info**
	- this is in-process - current code reflects the tutorials linked in the README
	- **problem**: current code successfully seeds the Postgres db with the provided users and messages, but I am unable to interact with the app
		- errors seem connected to the User.findByLogin() function
		- tutorial stalls out before fully connecting all the moving parts?
		- work through [error handling tutorial](https://www.robinwieruch.de/node-express-error-handling) once this project is passing the first example listed there (which should work without the error handling in place)
		
- determine how images should be hosted/managed; as a showcase-oriented project, artwork should be able to be displayed at high quality, ideally full resolution, so whether or not the images can live in this site's database (as opposed to using third-party hosting) will depend on the scope of the project the template is used for and the available hosting/server resource
	- determine whether the code will be the same in the template for third-party versus self-hosting of images
- include some test images and ensure they are scaling correctly/determine what the best display options might be


- **DON'T FORGET**: the HTML files need to be grouped into folders and renamed as-needed, meaning the links in the navbar will need to be updated across all the pages once this is done.


## Reach Goals
- add toggles for dark mode, high contrast, serif fonts (and any other reading-oriented tweaks I might come up with...)
- add mobile-optimized nav buttons
- add a commenting feature
- add an in-site form for adding new works and contributors
- add authentication for unique users and the ability to edit one's own works/contributor page/comments (both comments one has made on others' works and comments others have made on one's own works)
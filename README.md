# Notes

For building this UI, I opted for React and Material UI. I also decided to set up the React project manually (instead of using `create-react-app`) in order to gain some more familiarity with Webpack.

Since it's such a small project, I decided against Redux or any other state management tools. 

I also added a searchbar, which is implemented with a trie.


A few outstanding issues:
* Making a search will reset any sorting and restore any deleted albums. Since the search function is just a little extra anyway, I didn't prioritize it, but if I were going to fix the issue I would use some centralized state management to make updating the album list and search trie simpler.
* The styling could be improved. It's a bit lackluster as it is, and the album covers aren't perfectly cropped.
* Not suited for smaller screen sizes
* The Tooltip component triggers a nasty deprecation error in the console. I wasn't able to find a satisfactory solution, but it doesn't affect the functionality at all.
* The `webpack.dev.js` file should have an accompanying `webpack.prod.js` file for building for production.






## Music Library UI Assessment 🎵

Given the albums.json, create a simple UI that can do the following
1. Display the albums as a list of UI components. Each component should render the album artwork image, title, and artist.
2. Add a sort component that allows the user to sort the albums by artist name or album name.
3. Remove albums.
4. The `alt` property for each `<img>` tag should be set to the parsed out filename from the url. For example:  "https://upload.wikimedia.org/wikipedia/en/a/a6/Souvlaki_%28album%29_cover.jpg" should render as `<img src="https://upload.wikimedia.org/wikipedia/en/a/a6/Souvlaki_%28album%29_cover.jpg" alt="Souvlaki_%28album%29_cover.jpg" />`


A mock-up has been included to provide visual guidance. Your UI does not have to perfectly match the mock-up.

This exercise should not take more than a few hours. It's okay to get creative but don't stress yourself out!


When you are finished, just zip your local repo and send it on over. And of course, email us if you have questions.

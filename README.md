The home page is the main hub of the site. All pages can be reached via the home page.

In the header is a collapse button that is only visible when the site is active on a desktop. A mobile user won't have access
to the collapse. You can also return to the home page by pressing the home botton in the left nav or using the anchor that is
attached to the logo.

The left nav uses css to collapse when the screen is in mobile mode but can be toggled in desktop mode.

The main article on the page is used to one display future functionality that can be added as well as using a linear 
gradient to give it more visually appeal. This gradient acts more as a filter and can be used to cover the entire image
or target specific parts.

The listing of books on the home page give 2 navigation options. You can click on the image to be taken to the comics page
to shop, or can order directly from the home page using the order button. This button uses javascript to detrimine which page
it was clicked on and where it should send the user.

Javascript is used to store the order information in local storage in then is later passed an parsed in to object arrays to
deliver the order information. As I didn't have a micro service to pass the post information to I added a reset button to 
clear the form
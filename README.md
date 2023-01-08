# manage-landing-page-master
My second FrontEndMentor project

Hello Friends

This is my second challenge.

Here I used SCSS for the first time.

I ran into a problem after uploading files to the github repository. The problem is the background image in hero section is not displayed after publishing the site. But it is visible when I run html file using VS Code. Can anyone tell me what an issue is?

Also I have problems with the look of carousel in desktop view. I couldn't understand why it looks as it is now. I am new for JS and I watched Kevin Powell videos to make the Carousel.

I would be very thankful for your reviews and suggestions.


EDIT: 
Background image is back now. The problem was in the wrong path to the background image in the compiled CSS file. The URL path was addresed relative to the SCSS file where I was working but not relative to the compiled CSS file. So I have changed the path in the CSS file and it works now. I thought that scss compiler does it automatically but I was wrong. 

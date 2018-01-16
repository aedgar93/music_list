Code Challenge
This is an app that displays a list of songs. The app is responsive and works on mobile browsers as well as desktop. Uses AngularJS.

packages managed with npm.

To run:
1. please install npm. 
2. In the command line navigate to /music/app
3. "npm install"
4. "npm run serve"
5. If the browser does not open automatically, navigate to http://localhost:3000/


A couple things to note: 
1. The picture I was using as a reference has the album name. The songData.js I had did not have album names, so I used the artist instead.
2. None of the songs had a genre. But if they had one, it would be displayed.
3. I didn't have a search icon, so the search bar just doesn't have one.
4. There are some heights, paddings, widths, etc in the app.less file that do not use variables and are just hard coded in there.
Typically, I try to use variables as much as possible. But I was just guessing what the sizes were. Hopefully I would have either a standard (like all spaces between lines are 10px),
that I could work with, or I would have better tools to measure the spaces given the wireframe/design/etc.
5. I made the filter menu a seperate page. Looking back, I probably would have just made it a menu that slide/pops out and not had the extra filterService.
6. Searching only searches in the title. 

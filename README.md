# Project-3
Restaurant Reviews Website  
This website acts as a conduit for reading and posting reviews, ratings, and atrributes of your favourite restaurants.

## Week 2 Timeline
### Monday: 
##### AM:  
Project Management  
OOP Lesson  
##### PM:  
Project Work
### Tuesday
##### AM:  
OOP Coding Workshop  
##### PM:  
Project Work
### Wednesday
##### AM:  
1/2 way Milestones Completed
* Fix current bugs (Ivan)
* Get JS form to work (Kevin)
* CSS layouts completed incl. MQ (Jordan)  
OOP Coding Workshop  
##### PM:  
Project Work
### Thursday
##### AM:  
Ethics & Legals cross-session  
##### PM:  
Project Work
### Friday
##### AM:  
Project Tasks Completed
* Page layouts for all Media Queries
* Can post reviews
* All current JS Functions completed  
CSS Animation class  
##### PM:  
Project wrap-up
* Complete README
* Tidy root directory 
* Merge all git branches

## Reflective Keypoints
* Higher detail timelines
* Set more concise milestones
* Decompose problems further
* Split labour more evenly across disciplines
* Start JS early to remain on same page
* Understand the data structure
* Manipulate the application data
* Get the data into the structure
* Take responsible, effective breaks
* Getting frustrated happens, refer to above
* .then statements!!!!
* Stay motivated
      
          
# Working Log

## Ivan: 
### 2020-02-24
      1. wrote sudo code for potentially necessary functions;
      2. researched how to make ranking system with JS, wrote sudo code and examples for reference;
      3. researched where to get weather info, no REALLY FREE api yet...
### 2020-02-25
      1. made a test.html in scripts folder for function testing only;
      2. made a function to show names of all restaurants. It's working but need improvements;
      3. made a function to screen all restaurants with patios.
### 2020-02-26
      1. made the names into buttons with on click functions;
      2. wrote the functions to show restaurant details.
### 2020-02-27
      1. rewrote the fetch functions into async for readability;
      2. rewrote all the other functions in callback function;
      3. gave the buttons onclick functions that can only add info in a div (should replace info instead of adding).
### 2020-02-28
      1. wrote a function to calculate the average score of a restaurant;
      2. things to do over the weekend:
            a. post request for user comment;
            b. link the score to the restaurant, ie. when I click the button, the score of the restaurant should pop up.
### 2020-02-29
      1. wrote the function to properly display score when a restaurant is clicked;
      2. wrote the function to show 3 restaurants with highest score.
### 2020-03-02
      1. fixed bug for displaying reviews;
      2. added a function to show 3 reviews of this restaurant when the name button is clicked;
      3. minor refactor in the function showRestaurantInfoAnd3Reviews.
### 2020-03-03
      1. added "active" state for restaurant buttons, ie. the clicked button will change style untill another button is clicked.
      2. researched how to post user comments with javascript fetch-post.
### 2020-03-04
      1. continued researching and testing, can make new entry in server, but the entry is empty.
### 2020-03-05
      1. set an "initial state" to show one restaurant info & reviews without clicking any buttons;
      2. gave the generated contents different tags for better CSS styling.
### To-do List
      1. post user comment.
      2. weather api, show restaurants with patios according to weather.
      3. change restaurant names in the reviews into links. When a link is clicked, page should jump to the restaurant info section and display related info.
### Most/Least Proud Moments
      Most: Putting pieces of code together can make some of the functions work!
      Least: Having errors in my console and could not figure out why...

## Kevin:
### 2020-02-24 
      1. I created the repo and sent a collaboration to Ivan and Jordan.
      2. I created a few branches through the day.
      3. I downloaded several images, placed them in the images folder, and added them to index.
      4. Researched how to add comments and score, which we most likely do with patch.
      5. Researched how to add total number of reviews and restaurants. This will be dependent on the content of the API, when we receive it.

### 2020-02-25
      1. UPdated more images
      2. Studied Scrapi
      3. Did footer structure and style
      4. Did grid on page 2

### 2020-02-26
      1. Finished grid on page 2
      2. Started on switching pictures with JS

### 2020-02-27
      1. Finished picture switching functionality
      2. Started working on Combining scores for
      overall average

### 2020-02-28
      1. FInished combining scores with Ivans help

### 2020-02-29
      1. Fixed the footer
      
### 2020-03-01
     1. Finished Forms
### 2020-03-02
     1. Fixed footer as it broke
     2. Continued work on forms

### 2020-03-03
     1. Fine tuned layout
     2. Added tablet media query

     ### 2020-03-04
     1. Footer was broken, so fixed it
     2. Finished tablet query
     3. Attempted to problem-solve issues with posting form to api

### 2020-03-05
    1. Fixing errors
    2. Still trying to fix form errors




### Most Proudest
     Getting Picture replace working with JavaScript

### Least Proudest
      Not getting Promises and code. It is really disheartening.  
 
 ## Post-Project Retrospective

 ### 1. Share how that experience was for you working on that project
        As with any type of work, I found that you gain more understanding and confidence as you do more work on the project.  I like that I am gaining more confidence.

 ### 2. What is the 1 thing you are proud for the group, and 1 thing you are proud of for yourself?
        Group - very proud of the way everyone came together to solve issues and designed the site.  Speaking from experience, groups sometimes can clash.  Our group got along.

        Myself - Proud that I am getting the harder concepts down.  Though I have a ways to go, I know I can do it.

 ### 3. What is 1 key learning you will take away from this project?
        If a solution doesn't seem to be possible, tske  break.  Come back to the table and you will end up finding a solution.

 ### 4. What is one thing you want to challenge yourself on in the next project?
        I would like to do some of the more difficult taks so I can understand them better.
      


## Jordan:
### 2020-02-24 
      1. Built initial structure of HTML
      2. Linked google fonts
      3. Base styles begun
      4. Icons linked and made available
### 2020-02-25
      1. Media Query
      2. Fine-tuned layouts for mobile/desktop
      3. Styles applied
      4. Created img grid for reviews section
### 2020-02-26
      1. Completed Mobile layout/styles
      2. Desktop layout/styles applied, near completion
      3. Fonts/Colors applied
      4. Re-classed html elements for clarity
### 2020-02-27
      1. Created async functions to show total restaurants and reviews
      2. Inserted promise results into DOM
### 2020-02-28
      1. Created function to pull reviews based on recent updates
      2. Began Re-structuring layout for optimization
      3. Adjusting site brand colors for accessibility
### 2020-03-02
      1. Adjusted button styles
      2. Adjusted styles for generated information
      3. Corrected img layout for mobile
### 2020-03-03
      1. De-bugged css to remove layout breakages
      2. Completed optimized layouts for mobile and desktop media queries
      3. Re-structured elements for increased usability
      4. Re-styled search input
      5. Made iframes responsive to media breaks
### 2020-03-04
      1. De-bugged HTML
      2. De-bugged CSS
      3. Researched POST to API
      4. Replaced all placeholder text
### 2020-03-05
      1. De-bugged HTML
      2. De-bugged CSS
      3. Added MQ for responsiveness
      4. Formatted review areas
      5. Adjusted form input sizes
      6. Re-formatted page layouts
      7. Applied styles to generated content

## Reflections

### How was the experience working on that project for me?
* I found the experience to be enlightening. This was my first real group project and to see how everyone coordinates the workload was very interesting.

### 1 thing I'm proud of for the group and 1 thing I'm proud of for myself?
* For the group I am very proud of the way our group worked together and helped each other. We were communicative about our problems and receptive to suggestions on how to proceed.  For myself I am proud of my overall contributions to this project. I took the reins on most of the styling so I learnt a lot and was able to implement most of what I discovered.

### 1 key learning I will take from this project?
* Planning and managing workflow is incredibly important. Setting timelines and milestones within those timelines to direct our energy towards rather than "figuring it out as we go".

### 1 thing I want to challenge myself on the next project?
* I would like to be more involved in the functionality side of the next project. Writing more JavaScript and getting familiar with that tool seems like an integral skill to me.

## Highs/Lows
      Most Proud: Getting live information from API on to the page
      Least Proud: Overall lack of contribution to JS files both timewise and knowledgewise

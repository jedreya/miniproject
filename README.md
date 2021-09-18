# miniproject

1. Screen Navigation Set up:
No major issues, was able to set up home page first with buttons. 
Took time to learn and use the stackNavigator.
There was no need to make navigation back to the original pages, as expo automatically
creates back buttons to the previous page.

2. Google authentication Set up:
Issues mainly came about due to mismatches in installed versions of expo plugins.
Had issues with signInWithGoogleAsync(), had to work around problem with async functions not working
We decided to make the Login page the first page that opens up, and upon authentication,
the user is then taken to the Home page, where they can either scan items, logout, or go to their profile

3. FoodData Center API Set up:
There were no outstanding issues with calling the FDCAPI. 
The only issue faced was the issue where the results fetched from the API are too large that it was difficult 
to narrow down on the exact components that we are looking for. 

4. Camera Setup:
The camera was set up using expo-camera, and it was made so that there is a 'scan item' button, which
takes the user to a "camera page" where they can flip the camera if needed, and can take the picture.
We used a button as opposed to having the camera continually running, always ready to scan barcodes.
The main issue with using the camera was that there were discrepencies in the way the camera is set
up on android and ios, which caused major issues. 
It could have also been possible to use expo-barcode-reader, but I realized the option too late.

5. Comments:
This project was challenging for a person with close to zero experience with react and expo.
It was not too difficult to figure out each individual component of the Miniproject, but it was
difficult trying to figure out how to connect the features in order to make the app moved as 
desired.

Some images are attached 

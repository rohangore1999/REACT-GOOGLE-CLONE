C:\Users\gorer\react-google-clone>firebase init

     ######## #### ########  ######## ########     ###     ######  ########
     ##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##
     ######    ##  ########  ######   ########  #########  ######  ######
     ##        ##  ##    ##  ##       ##     ## ##     ##       ## ##
     ##       #### ##     ## ######## ########  ##     ##  ######  ########

You're about to initialize a Firebase project in this directory:

  C:\Users\gorer\react-google-clone

? Are you ready to proceed? Yes
? Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to confirm your choices. Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys

=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add,
but for now we'll just set up a default project.

? Please select an option: Use an existing project
? Select a default Firebase project for this directory: clone-aa449 (google-clone)
i  Using project clone-aa449 (google-clone)

=== Hosting Setup

Your public directory is the folder (relative to your project directory) that
will contain Hosting assets to be uploaded with firebase deploy. If you
have a build process for your assets, use your build's output directory.

? What do you want to use as your public directory? build
? Configure as a single-page app (rewrite all urls to /index.html)? Yes
? Set up automatic builds and deploys with GitHub? No
? File build/index.html already exists. Overwrite? Yes
+  Wrote build/index.html

i  Writing configuration info to firebase.json...
i  Writing project information to .firebaserc...

+  Firebase initialization complete!

-----------------------------------------------------------------------------------------------------

C:\Users\gorer\react-google-clone>npm run build

> react-google-clone@0.1.0 build C:\Users\gorer\react-google-clone
> react-scripts build

Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

  77.2 KB  build\static\js\2.70575bae.chunk.js
  2.09 KB  build\static\js\main.e8b8b9f4.chunk.js
  1.64 KB  build\static\js\3.b8203a62.chunk.js
  1.17 KB  build\static\js\runtime-main.673ba18a.js
  1.03 KB  build\static\css\main.e742fb7d.chunk.css

The project was built assuming it is hosted at /.
You can control this with the homepage field in your package.json.

The build folder is ready to be deployed.
You may serve it with a static server:

  npm install -g serve
  serve -s build

Find out more about deployment here:

  https://cra.link/deployment

-----------------------------------------------------------------------------------------------------

C:\Users\gorer\react-google-clone>firebase deploy

=== Deploying to 'clone-aa449'...

i  deploying hosting
i  hosting[clone-aa449]: beginning deploy...
i  hosting[clone-aa449]: found 18 files in build
+  hosting[clone-aa449]: file upload complete
i  hosting[clone-aa449]: finalizing version...
+  hosting[clone-aa449]: version finalized
i  hosting[clone-aa449]: releasing new version...
+  hosting[clone-aa449]: release complete

+  Deploy complete!

Project Console: https://console.firebase.google.com/project/clone-aa449/overview
Hosting URL: https://clone-aa449.web.app

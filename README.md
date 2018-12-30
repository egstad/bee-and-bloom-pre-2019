# Bee & Bloom Dotcom — A website for beekeepers, educators, and native pollinator advocates in Portland, OR.

## Instruction
1. Clone the repo: `git clone git@github.com:jordanegstad/bee-and-bloom.git; cd bee-and-bloom`
2. Install global dependecies : `npm install -g parcel-bundler; npm install -g @squarespace/server`
3. Fire up the front-end: `npm start`
4. Open an additional shell and navigate to the (squarespace) _Template_ directory. This is where you'll boot up the squarespace server.: `cd template; squarespace-server https://bee-and-bloom.squarespace.com --auth`.


## Publish
Changes ready to go live? Cool. In your first shell, cancel the start script `ctrl + c` and run the build script `npm run build`. When you're ready to publish your changes, switch to the squarespace shell, cancel the script, and create and push your changes with git. SS only has one master branch, so it goes live immediately.
 

## Notes
- Squarespace CMS
- Build Tool and Hot Module Replacement with [Packal](https://parceljs.org/getting_started.html)

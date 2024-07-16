let _ = require("underscore"); 
import mongoose from "mongoose";

// require looks for the file in the following order 
// 1. core module
// 2. File or folder 
// 3. node_module

let result = _.contains([1, 2, 3], 2)
console.log(result)

// to install a specific version, run ``npm i mongoose@2.4.2``
// to check which packages are outdated, ``npm outdated`` 
// to also check for updates, run ``npm-check-updates`` 
// ro upgrade ``ncu -u`` and then ``npm i``
// to update minor (1.x) and patch(1.x.x) release a packages
// install ``npm i jshint --save-dev`` to install js helper to detect potential bugs
// to uninstall a package, run ``npm un package`` un short for uninstall


// to update npm on mac, use the ``sudo npm i -g npm`` command
// to install a package globally, use the ``-g`` flag
// use the ``--save-dev`` flag to install to devDependencies 
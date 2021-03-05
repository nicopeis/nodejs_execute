
// testing testShellExe.js
const shellExeIO = require('./shellExeIO.js');
let testShellExeObj = new shellExeIO();



testShellExeObj.commands = ['Load xfoilProfile', 'PLOP', 'G', '', 'PANE', 'OPER', 'CINC', 'pacc', 'outPolar.txt', '', 'alfa 0', 'cpwr', 'outCp.txt', 'dump', 'outDump.txt', '', 'quit']
testShellExeObj.exepath = 'c:/Users/nicop/Google Drive/01_Programming/00_tutorials/00_git/nodejs_execute/xfoil/xfoil.exe'
testShellExeObj.cwdpath = 'c:/Users/nicop/Google Drive/01_Programming/00_tutorials/00_git/nodejs_execute/xfoil'

testShellExeObj.executeIO();

console.log(testShellExeObj);


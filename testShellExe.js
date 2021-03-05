
// testing testShellExe.js
const shellExeIO = require('./shellExeIO.js');
let testShellExeObj = new shellExeIO();

testShellExeObj.commands = ['Load xfoilProfile', 'PLOP', 'G', '', 'PANE', 'OPER', 'CINC', 'pacc', 'out_Polar.txt', '', 'alfa 0', 'cpwr', 'out_Cp.txt', 'dump', 'out_Dump.txt', '', 'quit']
testShellExeObj.exepath = __dirname + '/xfoil/xfoil.exe'
testShellExeObj.cwdpath = __dirname + './xfoil'

testShellExeObj.executeIO();

console.log(testShellExeObj);


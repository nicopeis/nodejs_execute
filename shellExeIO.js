// On Windows Only...


module.exports = class shellExeIO {
    constructor() {
        this.commands = [];
        this.exepath = '';
        this.cwdpath = '';
    }

    setRunInExePath() {
        let cwdpatharr = exepath.split(
            '/')
        cwdpatharr.pop();
        this.cwdpath = cwdpatharr.join('/');
    }

    executeIO() {
        const { spawn } = require('child_process');
        const subprocess = spawn(this.exepath, { cwd: this.cwdpath });

        this.commands.forEach(i => subprocess.stdin.write(i.concat('\n')));

        subprocess.stdout.on('data', function (data) {
            console.log('stdout: ' + data);
        });
        subprocess.stdin.end();
    }

}
/*
commands = ['Load xfoilProfile', 'PLOP', 'G', '', 'PANE', 'OPER', 'CINC', 'pacc', 'mares_profile.pol', '', 'alfa 0', 'cpwr', 'mares_profile.cp', 'dump', 'mares_profile.dump', '', 'quit']
exepath = 'c:/Users/nicop/Google Drive/01_Programming/00_tutorials/00_git/nodejs_execute/xfoil.exe'
cwdpath = 'c:/Users/nicop/Google Drive/01_Programming/00_tutorials/00_git/nodejs_execute'

cwdpatharr = exepath.split('/')
cwdpatharr.pop();
cwdpath = cwdpatharr.join('/');


const { spawn } = require('child_process');
const subprocess = spawn(exepath, { cwd: cwdpath });

commands.forEach(i => subprocess.stdin.write(i.concat('\n')));
subprocess.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
});
//commands.forEach(i => console.log(i));
subprocess.stdin.end();

*/
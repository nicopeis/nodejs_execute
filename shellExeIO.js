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

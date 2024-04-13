NetworkTables.addRobotConnectionListener((connected) => {
    if (connected) {
        document.body.dataset.robotConnected = '';
    } else {
        delete document.body.dataset.robotConnected;
        tryConnect();
    }
});

function tryConnect() {
    window.api.sendConnect('roborio-4639-frc.local');
}
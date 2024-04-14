NetworkTables.addGlobalListener(() => {
    document.body.dataset.robotConnected = '';
})

NetworkTables.addRobotConnectionListener((connected) => {
    if (connected) {
        console.log('Robot connected!');
        // document.body.dataset.robotConnected = '';

    } else {
        delete document.body.dataset.robotConnected;
        tryConnect();
    }
});

function tryConnect() {
    console.log('Trying to connect...');
    window.api.sendConnect('roborio-4639-frc.local');
}
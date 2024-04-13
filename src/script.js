const gyro_display = document.getElementById('gyro');
const wheels = [...gyro_display.children];
NetworkTables.addKeyListener('/SmartDashboard/heading pose', (_, value) => {
    gyro_display.style.setProperty('--angle', value + 'deg');
});
for(let i = 0; i < 4; i++) {
    NetworkTables.addKeyListener(`/SmartDashboard/Module ${i + 1} current rotation`, (_, value) => {
        wheels[i].style.setProperty('--angle', value + 'deg');
    });
}

const time_display = document.getElementById('time');
NetworkTables.addKeyListener('/robot/time', (key, value) => {
    time_display.textContent = value < 0 ? '0:00' : Math.floor(value / 60) + ':' + (value % 60 < 10 ? '0' : '') + value % 60;
});

// // Load list of prewritten autonomous modes
// NetworkTables.addKeyListener('/SmartDashboard/autonomous/modes', (key, value) => {
//     // Clear previous list
//     while (ui.autoSelect.firstChild) {
//         ui.autoSelect.removeChild(ui.autoSelect.firstChild);
//     }
//     // Make an option for each autonomous mode and put it in the selector
//     for (let i = 0; i < value.length; i++) {
//         var option = document.createElement('option');
//         option.appendChild(document.createTextNode(value[i]));
//         ui.autoSelect.appendChild(option);
//     }
//     // Set value to the already-selected mode. If there is none, nothing will happen.
//     ui.autoSelect.value = NetworkTables.getValue('/SmartDashboard/currentlySelectedMode');
// });
//
// // Load list of prewritten autonomous modes
// NetworkTables.addKeyListener('/SmartDashboard/autonomous/selected', (key, value) => {
//     ui.autoSelect.value = value;
// });
//
// // The rest of the doc is listeners for UI elements being clicked on
// ui.example.button.onclick = function() {
//     // Set NetworkTables values to the opposite of whether button has active class.
//     NetworkTables.putValue('/SmartDashboard/example_variable', this.className != 'active');
// };
// // Reset gyro value to 0 on click
// ui.gyro.container.onclick = function() {
//     // Store previous gyro val, will now be subtracted from val for callibration
//     ui.gyro.offset = ui.gyro.val;
//     // Trigger the gyro to recalculate value.
//     updateGyro('/SmartDashboard/drive/navx/yaw', ui.gyro.val);
// };
// // Update NetworkTables when autonomous selector is changed
// ui.autoSelect.onchange = function() {
//     NetworkTables.putValue('/SmartDashboard/autonomous/selected', this.value);
// };
// // Get value of arm height slider when it's adjusted
// ui.armPosition.oninput = function() {
//     NetworkTables.putValue('/SmartDashboard/arm/encoder', parseInt(this.value));
// };
//
// addEventListener('error', (ev) => {
//     window.api.sendWindowError({
// 		mesg: ev.message,
// 		file: ev.filename,
// 		lineNumber: ev.lineno
// 	});
// });

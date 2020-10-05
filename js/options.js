function restore(){
    chrome.storage.local.get(["setting"], (storage) => {
        if (storage.setting.image_source != undefined){
            document.querySelectorAll("#image_source > option").forEach(element => {
                if (element.value == storage.setting.image_source){
                    element.selected = true;
                }
            });
        }

        if (storage.setting.image_longside != undefined) {
            document.getElementById("image_longside").value = storage.setting.image_longside;
        } else {
            document.getElementById("image_longside").value = "480";
        }

        if(storage.setting.hide_cursor != undefined) {
            document.getElementById("hide_cursor").checked = storage.setting.hide_cursor;
        } else [
            document.getElementById("hide_cursor").checked = false
        ]

        if(storage.setting.auto_switch != undefined) {
            document.getElementById("auto_switch").checked = storage.setting.auto_switch;
        } else {
            document.getElementById("auto_switch").checked = false
        }

        if(storage.setting.switch_interval != undefined) {
            document.getElementById("switch_interval").value = storage.setting.switch_interval;
        } else {
            document.getElementById("switch_interval").value = "2";
        }
    });
}

function save() {
    let setting = {
        "image_source": document.getElementById("image_source").value,
        "image_longside": document.getElementById("image_longside").value,
        "hide_cursor": document.getElementById("hide_cursor").checked,
        "auto_switch": document.getElementById("auto_switch").checked,
        "switch_interval": document.getElementById("switch_interval").value
    }

    chrome.storage.local.set({"setting": setting}, function () {
        var status = document.getElementById("status");
        function hide_status(){
            status.style.opacity = 0;
        }

        status.style.opacity = 1;
        timeoutID = window.setTimeout(hide_status, 2000);
    });
}

restore();

document.getElementById("save").addEventListener("click", function () {
    save();
});
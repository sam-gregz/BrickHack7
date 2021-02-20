const initUI = () => {
    const nameMessage = document.getElementById("name-message")
    nameMessage.innerHTML = `You are logged in as ${randomName}`
    const joinButton = document.getElementById('join-btn')
    const conferenceAliasInput = document.getElementById('alias-input')

    joinButton.disabled = false

    joinButton.onclick = () => {
        let conferenceAlias = conferenceAliasInput.value;

        /*
         * 1. Create a conference room with an alias
         * 2. Join the conference with its id
         */
        VoxeetSDK.conference.create({ alias: conferenceAlias })
            .then((conference) => VoxeetSDK.conference.join(conference, {}))
            .then(() => {
                joinButton.disabled = true;
                leaveButton.disabled = false;
            })
            .catch((e) => console.log('Something wrong happened: ' + e))
    };
    
    const leaveButton = document.getElementById('leave-btn')
    leaveButton.onclick = () => {
        VoxeetSDK.conference
            .leave()
            .then(() => {
                joinButton.disabled = false
                leaveButton.disabled = true
            })
            .catch(err => {
                console.log(err)
            })
    };
}

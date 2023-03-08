//jshint esversion:8

function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making request to ${location}`)
        if (location === "Google") {
            resolve("Google says hi");
        } else {
            reject("We can only talk to Google");
        }
    });
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Processing response');
        resolve(`Extra information ${response}`);
    });
}

// makeRequest('Googl1e').then(response => {
//     console.log('response recieved');
//     return processRequest(response);
// }).then(processedReponse => {
//     console.log(processedReponse);
// }).catch(err => {
//     console.log(err);
// });


async function doWork() {

    try {
        const response = await makeRequest("Go2ogle");
        console.log("response recieved");
        const processedRepsponse = await processRequest(response);
        console.log(processedRepsponse);
    }
    catch (err) {
        console.log(err);
    }


}


doWork();
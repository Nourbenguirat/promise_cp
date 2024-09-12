//task1:
async function iterateWithAsyncAwait(value, tab) {
    if (tab.includes(value)) {
        await new Promise(resolve => setTimeout(resolve, 1000)); 
        console.log(value);
    }
}

// tab exemple 
iterateWithAsyncAwait(2, [1, 2, 3, 4]);



//task2:
async function awaitCall() {
    const fakeApiCall = new Promise((resolve)=> {
        setTimeout( resolve),2000}); 
    const result = await fakeApiCall;
    console.log(result);
}
awaitCall();


//task3:

async function awaitCall() {
    const success = Math.random() > 0.5;
    const fakeApiCall = new Promise((resolve, reject)=>{
    setTimeout(success), 2000});
        if (success) {
                resolve('Here is your data from the fake API!');
         } else {
                reject('API call failed!');
         }
    try {
       
        const result = await fakeApiCall;

        console.log(result);
    } catch (error) {
        console.log('Something went wrong: ' + error);
    }

};
awaitCall();

//task4:

async function concurrentRequests() {
   
    const fakeApiCall1 = new Promise(function(resolve) {
        setTimeout(function() {
            resolve('Data from API 1');
        }, 2000); 
    });

    const fakeApiCall2 = new Promise(function(resolve) {
        setTimeout(function() {
            resolve('Data from API 2');
        }, 3000);
    });

    try {
        
        const results = await Promise.all([fakeApiCall1, fakeApiCall2]);

        
        console.log('Both API calls finished:');
        console.log(results); 
    } catch (error) {
      
        console.log('Error with one of the API calls: ' + error);
    }
}

concurrentRequests();


//task5:

async function parallelCalls(urls) {
    const fetchPromises = urls.map(url => fetch(url).then(response => response.json()));

    try {   
        const results = await Promise.all(fetchPromises);
        
        console.log('All requests finished:');
        console.log(results);
    } catch (error) {
        console.log('Error with one or more requests: ' + error);
    }
}
const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
];

parallelCalls(urls);


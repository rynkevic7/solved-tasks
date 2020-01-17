/*
Can Santa save Christmas?
Oh no! Santa's little elves are sick this year. He has to distribute the presents on his own.
But he has only 24 hours left. Can he do it?
Your job is to determine if Santa can distribute all the presents in 24 hours.

Your Task:
You will get an array as input with time durations as string in the following format:
"hh:mm:ss"

Each duration is a present Santa has to distribute.

Return true or false whether he can do it in 24 hours or not.

If this kata was to easy for you. Try the harder one.

This kata is part of the Collection "Date fundamentals":
 */

function determineTime(durations){
    let time = 0

    for(let i = 0; i< durations.length; i++){
        let arr = durations[i].split(':')
        let h = arr[0];
        let m = arr[1];
        let s = arr[2];

        let t = h*3600 + m*60 + s*1;
        time  = time + t;
    }
    return time <= 24*3600;
}

//or

function determineTime(durations){
    let seconds = 0;
    let arr = [];
    for (let i = 0; i < durations.length; i++ ){
        arr = durations[i].split(':');
        seconds += arr[0] * 60 * 60 + arr[1] * 60 + arr[2]*1;
    }
    return (seconds <= 86400 ) ? true : false;
}

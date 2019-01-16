function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    var truck_count = truck_weights.length;
    var end_weights = [];
    var bridge = [];

    for(let i = 0; i < bridge_length; i++){
        bridge.push(0);
    }

    while(end_weights.length != truck_count){
        //time count
        answer++;

        //arrive
        if(bridge[0] != 0){
            end_weights.push(bridge[0]);
        }

        //move cars
        bridge.shift();
        bridge.push(0);

        //input to bridge(last place)
        //var sum = bridge.filter(num => num > 0).reduce((a, b) => a + b, 0) + truck_weights[0];
        var sum = 0;
        for(let car_weight of bridge){
            sum += car_weight;
        }
        sum += truck_weights[0];
        if(sum <= weight){
            bridge[bridge.length - 1] = truck_weights.shift() || 0;
        }
        //console.log(bridge);
    }
    return answer;
}

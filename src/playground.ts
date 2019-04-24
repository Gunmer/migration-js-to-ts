import {Task} from "./playground/task";

class Playground {

    run(){
        this.executeSerial();
        this.executeParallel();
    }

    private async executeParallel() {
        let t0 = Date.now();

        let promises = this.buildTask().map(t => t.execute());
        let [result1, result2, result3, result4 ] = await Promise.all(promises);

        let t1 = Date.now();
        console.log(`Execute in parallel: ${t1 - t0} milliseconds`);
        console.log(`Results: ${JSON.stringify([result1, result2, result3, result4])}`);
    }

    private async executeSerial() {
        let t0 = Date.now();

        let results = [];
        for(let task of this.buildTask()) {
            let result = await task.execute();
            results.push(result);
        }

        let t1 = Date.now();
        console.log(`Execute in serial: ${t1 - t0} milliseconds`);
        console.log(`Results: ${JSON.stringify(results)}`);
    }

    private buildTask() {
        return [
            new Task(500),
            new Task(300),
            new Task(200),
            new Task(100),
        ]
    }
}

const playground = new Playground();
playground.run();

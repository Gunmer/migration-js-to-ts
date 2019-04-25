import {Task} from "./playground/task";
import Axios, {AxiosInstance, AxiosPromise} from "axios";

class Playground {

    run(){
        this.executeSerial();
        this.executeParallel();
    }

    private async executeParallel() {
        let t0 = Date.now();

        let http = Axios.create({});
        let promise1 = http.get(`https://jsonplaceholder.typicode.com/posts/1`);
        let promise2 = http.get(`https://jsonplaceholder.typicode.com/posts/2`);
        let promise3 = http.get(`https://jsonplaceholder.typicode.com/posts/3`);
        let promise4 = http.get(`https://jsonplaceholder.typicode.com/posts/4`);

        let [response1] = await Promise.all([promise1, promise2, promise3, promise4]);

        let t1 = Date.now();
        console.log(`Execute in parallel: ${t1 - t0} milliseconds`);
        console.log(`Results: ${JSON.stringify([response1.data])}`);
    }

    private async executeSerial() {
        let t0 = Date.now();

        let http = Axios.create({});
        let response1 = await http.get(`https://jsonplaceholder.typicode.com/posts/1`);
        let response2 = await http.get(`https://jsonplaceholder.typicode.com/posts/2`);
        let response3 = await http.get(`https://jsonplaceholder.typicode.com/posts/3`);
        let response4 = await http.get(`https://jsonplaceholder.typicode.com/posts/4`);

        let t1 = Date.now();
        console.log(`Execute in serial: ${t1 - t0} milliseconds`);
        console.log(`Results: ${JSON.stringify(response1.data)}`);
    }

    private buildPromises(http: AxiosInstance) {
        let promises: AxiosPromise<any>[] = [];
        for(let index of Array.from(Array(10).keys())) {
            let promise = http.get(`https://jsonplaceholder.typicode.com/posts/${index + 1}`);
            promises.push(promise);
        }

        return promises;
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

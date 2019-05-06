import Axios from "axios";

class Playground {

    http = Axios.create({});

    run() {
        this.http.interceptors.request.use(this.logReq());
        this.http.interceptors.response.use(this.logRes());
        this.executeSerial();
        this.executeParallel();
    }

    logReq() {
        return request => {
            request.metadata = {startTime: new Date()};
            //console.log(`startTime: ${request.metadata.startTime}`);
            return request;
        }
    }

    logRes() {
        return response => {
            response.config.metadata.endTime = new Date();
            response.duration = response.config.metadata.endTime - response.config.metadata.startTime;
            //console.log(`endTime: ${response.config.metadata.endTime}`);
            console.log(`duration: ${response.duration}`);
            return response;
        };
    }

    private async executeParallel() {
        let t0 = Date.now();

        let promise1 = this.http.get(`https://jsonplaceholder.typicode.com/posts`);
        let promise2 = this.http.get(`https://jsonplaceholder.typicode.com/posts`);
        let promise3 = this.http.get(`https://jsonplaceholder.typicode.com/posts`);
        let promise4 = this.http.get(`https://jsonplaceholder.typicode.com/posts`);

        let [response1] = await Promise.all([promise1, promise2, promise3, promise4]);

        let t1 = Date.now();
        console.log(`Execute in parallel: ${t1 - t0} milliseconds`);
        //console.log(`Results: ${JSON.stringify([response1.data])}`);
    }

    private async executeSerial() {
        let t0 = Date.now();

        let response1 = await this.http.get(`https://jsonplaceholder.typicode.com/posts`);
        let response2 = await this.http.get(`https://jsonplaceholder.typicode.com/posts`);
        let response3 = await this.http.get(`https://jsonplaceholder.typicode.com/posts`);
        let response4 = await this.http.get(`https://jsonplaceholder.typicode.com/posts`);

        let t1 = Date.now();
        console.log(`Execute in serial: ${t1 - t0} milliseconds`);
        //console.log(`Results: ${JSON.stringify(response1.data)}`);
    }

}

const playground = new Playground();
playground.run();

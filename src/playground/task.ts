export class Task {
    private readonly time: number;

    constructor(time: number){
        this.time = time;
    }

    execute(): Promise<string> {
        return new Promise<string>((resolve => {
            setTimeout(resolve, this.time, `Task ${this.time}`)
        }));
    }
}

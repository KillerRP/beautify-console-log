export class Log{
    static custom(message: string | object, color: string){
        if (typeof message === "string") {
            console.log(`%c ${message}`, `color:${color}`);
        } else if (typeof message === "object") {
            console.log(`%c ${JSON.stringify(message)}`, `color:${color}`);
        }else{
            throw new Error("Invalid Type: " + typeof message + ". Please pass only 'string' or 'object'");
        }
    }
    static success(message:string | Object){
        this.custom(message, "green");
    }
    static danger(message:string | Object){
        this.custom(message, "red");
    }
    static info(message:string | Object){
        this.custom(message, "yellow");
    }
}
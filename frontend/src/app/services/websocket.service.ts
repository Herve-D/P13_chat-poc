import { Injectable } from "@angular/core";
import * as Rj from 'rxjs';

@Injectable()
export class WebsocketService {

    constructor() { }

    private subject: Rj.Subject<MessageEvent> | undefined;

    public connect(url: string): Rj.Subject<MessageEvent> {
        if (!this.subject) {
            this.subject = this.create(url);
            console.log('Successfully connected to : ' + url);
        }
        return this.subject;
    }

    public disconnect(url: string) {
        this.subject = undefined;
        console.log('Successfully disconnected from : ' + url);
    }

    private create(url: string): Rj.Subject<MessageEvent> {
        let websocket = new WebSocket(url);

        let observable = Rj.Observable.create((obs: Rj.Observer<MessageEvent>) => {
            websocket.onmessage = obs.next.bind(obs);
            websocket.onerror = obs.error.bind(obs);
            websocket.onclose = obs.complete.bind(obs);
            return websocket.close.bind(websocket);
        });
        let observer = {
            next: (data: Object) => {
                if (websocket.readyState === WebSocket.OPEN) {
                    websocket.send(JSON.stringify(data));
                }
            },
        };
        return Rj.Subject.create(observer, observable);
    }

}
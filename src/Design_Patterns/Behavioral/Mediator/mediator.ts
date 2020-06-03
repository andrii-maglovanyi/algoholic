interface Mediator {
  send(event: string, sender: object, receiver?: object): void;
}

export class Chatroom implements Mediator {
  public participants: Participant[] = [];

  registerParticipant(participant: Participant) {
    participant.setMediator(this);
    this.participants.push(participant);
  }

  send(message: string, sender: Participant, receiver?: Participant) {
    if (receiver) {
      receiver.receive(message, sender);
    } else {
      this.participants
        .filter((participant) => participant.name !== sender.name)
        .forEach((participant) => {
          participant.receive(message, sender);
        });
    }
  }
}

export class Participant {
  protected mediator?: Mediator;
  public messages: { message: string; sender: Participant }[] = [];

  constructor(public name: string) {}

  public setMediator(mediator: Mediator) {
    this.mediator = mediator;
  }

  public send(message: string, receiver?: Participant) {
    if (this.mediator) {
      this.mediator.send(message, this, receiver);
    }
  }

  public receive(message: string, sender: Participant) {
    this.messages.push({ message, sender });
  }
}

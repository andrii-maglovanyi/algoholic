import { Chatroom, Participant } from "./mediator";

it("Should deliver message to participants", () => {
  const yoko = new Participant("Yoko");
  const john = new Participant("John");
  const paul = new Participant("Paul");
  const ringo = new Participant("Ringo");

  const chatroom = new Chatroom();
  chatroom.registerParticipant(yoko);
  chatroom.registerParticipant(john);
  chatroom.registerParticipant(paul);
  chatroom.registerParticipant(ringo);

  yoko.send("All you need is love.");
  yoko.send("I love you John.");
  john.send("Hey, no need to broadcast", yoko);
  paul.send("Ha, I heard that!");
  ringo.send("Paul, what do you think?", paul);

  expect(yoko.messages).toEqual([
    { message: "Hey, no need to broadcast", sender: john },
    { message: "Ha, I heard that!", sender: paul },
  ]);

  expect(john.messages).toEqual([
    { message: "All you need is love.", sender: yoko },
    { message: "I love you John.", sender: yoko },
    { message: "Ha, I heard that!", sender: paul },
  ]);

  expect(paul.messages).toEqual([
    { message: "All you need is love.", sender: yoko },
    { message: "I love you John.", sender: yoko },
    { message: "Paul, what do you think?", sender: ringo },
  ]);

  expect(ringo.messages).toEqual([
    { message: "All you need is love.", sender: yoko },
    { message: "I love you John.", sender: yoko },
    { message: "Ha, I heard that!", sender: paul },
  ]);
});

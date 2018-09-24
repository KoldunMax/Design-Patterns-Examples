class Participant {
  constructor(name) {
     this.name = name
     this.chatRoom = null 
  }
  send(message, to) {
    this.chatRoom.send(message, this, to)
  }
  receive(message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`)
  }
}

let ChatRoom = function () {
  let participants = {}
  return {
    register(participant) {
      participants[participant.name] = participant
      participant.chatRoom = this
    },
    send(message, from, to) {
      if(to) {
        to.receive(message, from)
      } else {
        for(key in participants) {
          if(participants[key] !== from) {
            participants[key].receive(message, from)
          }
        }
      }
    }
  }
}

let beau = new Participant('Beau')
let quincy = new Participant('Quincy')
let rafael = new Participant('Rafael')

let chatroom = new ChatRoom()
chatroom.register(beau)
chatroom.register(quincy)
chatroom.register(rafael)

beau.send('Hi everybody')
quincy.send('hi beau', beau)
class SkiRent {
  RentBoots(feetSize, skierLevel) {
    return 20;
  }
  RentSki(weight, skierLevel) {
    return 40;
  }
  RentPole(height) {
    return 5;
  }
}

class SkiResortTicketSystem {
  BuyOneDayTicket() {
    return 115;
  }
  BuyHalfDayTicket() {
    return 60;
  }
}

class HotelBookingSystem {
  BookRoom(roomQuality) {
    switch (roomQuality) {
      case 3:
        return 250;
      case 4:
        return 500;
      case 5:
        return 900;
      default:
        throw new ArgumentException(
          'roomQuality should be in range [3;5]');
    }
  }
}

class SkiResortFacade {
  constructor() {
    this._skiRent = new SkiRent()
    this._skiResortTicketSystem = new SkiResortTicketSystem()
    this._hotelBookingSystem = new HotelBookingSystem()
  }

  HaveGoodRest(height, weight, feetSize, skierLevel, roomQuality) {
    let skiPrice = this._skiRent.RentSki(weight, skierLevel)
    let skiBootsPrice = this._skiRent.RentBoots(feetSize, skierLevel)
    let polePrice = this._skiRent.RentPole(height)
    let oneDayTicketPr = this._skiResortTicketSystem.BuyOneDayTicket()
    let hotelPrice = this._hotelBookingSystem.BookRoom(roomQuality)

    return skiPrice + skiBootsPrice + polePrice + oneDayTicketPr + hotelPrice;
  }

  HaveRestWithOwnSkis() {
    let oneDayTicketPrice = this._skiResortTicketSystem.BuyOneDayTicket();
    return oneDayTicketPrice;
  }
}

let _skiResortFacade = new SkiResortFacade()
console.log(_skiResortFacade.HaveGoodRest(6, 80, 43, 2, 4))
console.log(_skiResortFacade.HaveRestWithOwnSkis())
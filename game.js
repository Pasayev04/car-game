var car = {
    make: "BMW",
    model: "M 8",
    color: "Black",
    mileage: 2000,
    isWorking: true,

    driveToWork: function() {
      alert("Old Mileage: " + this.mileage);

      this.mileage = this.mileage + 10;

      alert("New mileage: " + this.mileage);
    },

    driveAroundWorld: function() {
      alert("Old Mileage: " + this.mileage);

      this.mileage = this.mileage + 10000;

      alert("New Mileage: " + this.mileage);
      alert("Car needs a tuneup!");

      this.isWorking = false;
    },

    getTuneUp: function() {
      alert("Car is ready to go!");
      this.isWorking = true;
    },

  };

  function reWriteStats () {

    console.log(car.make)
    console.log(car.model)
    console.log(car.mileage)
    car.driveToWork();
    car.driveAroundWorld();
    car.getTuneUp();
    console.log(Object.keys(car));
    console.log(Object.values(car));
  }

  window.onkeypress = function (event) {

    var bmw = event.key;

        if (bmw === "d") {
          car.driveToWork();
          reWriteStats();
        }

        if (bmw === "w") {
          car.driveAroundWorld();
          reWriteStats();
        }

        if (bmw === "t") {
          car.getTuneUp();
          reWriteStats();
        }

};


    
import { Component } from "react";

class User extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome To User Component", //declaring aString, Object & Array Inside aState

      bike: {
        bName: "Pulsor",
        price: "99000",
        milage: "40Km",
        model: "2018",
      },

      bikes: [
        "TVS",
        "Bajaj",
        "Suzuki",
        "Hero",
        "Honda",
        "KTM",
        "RajDooth",
        "Yezdi",
      ],
    };
  }

  render() {
    return (
      <div>
        <h2>Welcom to ReactJs Components</h2>
        <hr />
        {/* Binding A String */}
        <h3>{this.state.message}</h3>

        {/* Binding An Object */}
        <ul>
          <li>{this.state.bike.bName}</li>
          <li>{this.state.bike.price}</li>
          <li>{this.state.bike.milage}</li>
          <li>{this.state.bike.model}</li>
        </ul>

        {/* Binding or Maping An Array */}
        <ul>
          {Object.values(this.state.bikes).map((val, i) => {
            return <li key={i}>{val}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default User;

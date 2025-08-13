import { Component } from "react";
import CompA from "./CompA";
import CompB from "./CompB";

export default class SiblingComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      commonMessage: "Welcome To Common Message",
    };
  }

  msgChangFunc = () => {
    this.setState({ commonMessage: "I Got Changed From Comp A" });
  };

  render() {
    return (
      <div>
        <CompA changeMsgComp={this.msgChangFunc} />
        <hr />
        <CompB msg={this.state.commonMessage} />
      </div>
    );
  }
}

//1.Created SiblingCom and called CompA &CompB
//2.Created a State in siblingComp and Shared to CompB
//3.Created Function to change the state and shared to CompA
//4. Inside CompA , When  we Click the button  , Invoking Function which received fom SiblingsComp
//5.the function which received form sinlincomp , will change the state, Because that state is allready sahared to CompB
//6.Then the change Will Take Place

import React, {Component} from 'react'

class UpdateVal extends Component{
    constructor(){
        super();
        this.state ={
        };
        this.onInputchange = this.onInputChange.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    onInputChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmitForm(){
        console.log(this.state)
    }
    render(props){
        const {items} = this.state;
        return (
            <>
            <div className="container mx-3">
                <div>
                <label>
                  First Name :
                  <input
                    name="fname"
                    type="text"
                    value={this.state.fname}
                    onChange={this.onInputchange}
                  />
                </label>
              </div>
              <div>
                <label>
                  Last Name :
                  <input
                    name="lname"
                    type="text"
                    value={this.state.lname}
                    onChange={this.onInputchange}
                  />
                </label>
              </div>
              <div>
                <label>
                  Email :
                  <input
                    name="email"
                    type="text"
                    value={this.state.email}
                    onChange={this.onInputchange}
                  />
                </label>
              </div>
              <div>
                  <button onClick={this.onSubmitForm}>Submit</button>
              </div>
            </div>

              <div className="container my-3">
                <h6>First Name: {this.state.fname}</h6>
                <h6>Last Name: {this.state.lname}</h6>
                <h6>Mail: {this.state.email}</h6>
              </div>
            </>
          );
        }
}

export default UpdateVal;
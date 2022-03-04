import React, { Component } from 'react'

export default class Employee extends Component {
    state = {
        name: '',
        department: '',
        rating: '',
        header: " EMPLOYEE INFORMATION ",
        display: [],
    }

    updateChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    submited = (e) => {
        e.preventDefault();

        const tempObj = {
            name: this.state.name,
            department: this.state.department,
            rating: this.state.rating
        }
        const tempArr = this.state.display
        tempArr.push(tempObj)
        this.setState({ display: tempArr })
    }

    render() {

        return (
            <> <h1> {this.state.header} </h1>

                <form action="" onSubmit={this.submited} >
                    <div>
                        <label user="name" className='form-label'>Name : </label>
                        <input required type="text" className='form-input' name="name" id="name" value={this.state.name} onChange={this.updateChange} />  <br /><br />
                        <label user="name" className='form-label'>Department : </label>
                        <input required type="text" className='form-input' name="department" id="department" value={this.state.department} onChange={this.updateChange} />    <br /><br />
                        <label user="name" className='form-label'>Rating : </label>
                        <input required type="number" className='form-input' name="rating" id="rating" min={1} max={10} value={this.state.rating} onChange={this.updateChange} />   <br /><br />
                    </div>
                    <button type="submit" className='form-submit'  >submit</button>
                </form> <br/>

                <div className='flex'>
                    {
                        this.state.display.map((val, index) =>
                            <div className='info' key={index}>
                                Name : {val.name} || Department : {val.department} || Rating : {val.rating}

                            </div>)

                    }

                </div> </>

        )
    }

}



import React, { Component } from 'react'
import './form.css';
export class Amount extends Component {

    state = {
        notes: [],
        value: '',
    };

    denominations = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

    updateParent = () => {
        this.props.getAmount(this.state.notes);
    }

    handleClick = async (e) => {
        e.preventDefault();
        let amountLeft = this.state.value;
        let notes = 0;
        let notesArr = [];
        this.denominations.forEach(amount => {
            if (amountLeft >= amount) {
                notes = amountLeft / amount;
                amountLeft = amountLeft % amount;
                notesArr.push({
                    denomination: amount,
                    notes: Math.floor(notes)
                })
            }
        });
        await this.setState({ notes: notesArr })
        this.updateParent()
    }

    handleAmount = (e) => {
        this.setState({ value: e.target.value });
    }

    render() {
        return (
            <div>
                <div className="content aligned">
                    <h2>Welcome to ATM</h2>
                    <label>Enter The Amount</label>
                    <br />
                    <form onSubmit={this.handleClick} className="ui form">
                        <div className="field">
                            <input type="number" onChange={this.handleAmount} />
                        </div>
                        <div className="field">
                            <button type="submit" className="fluid ui primary button">Get Money</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

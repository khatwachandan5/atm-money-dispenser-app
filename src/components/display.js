import React, { Component } from 'react';
import './display.css'

export class Display extends Component {

      calcMoneyDispense() {
        let totalNotes = 0;
        let output = this.props.getBreakup.sort((a, b) => a.denomination - b.denomination).map((note, index) => (            
            <tr key={index}>
                <td>{note.notes} notes of Rs {note.denomination} <span style={{display: 'none'}}>{totalNotes += note.notes}</span></td>            
            </tr>
        ))
        return { output, totalNotes };
      }

      getRender() {
        if (this.props.getBreakup) {            
            let { output, totalNotes } = this.calcMoneyDispense();
            return (
                <div>
                <table className="aligned">
                    <thead> 
                        <tr>
                            <th>You will get following amount</th>
                        </tr>
                    </thead>
                    <tbody>                    
                    { output }                    
                    </tbody>
                </table>
                    <h3 className="aligned">Total notes dispensed: { totalNotes }</h3>
                </div>
            );
            }
          return (
              <div></div>
          ) 
      };

      render() {     
          return this.getRender();
      }
}
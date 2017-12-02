import React, { Component } from 'react';


class Bounty extends Component {
  render() {
    let formStyle = {
      width:'80%',
      marginLeft:'90px'
    }

    return (
      <div className="container">
      <div className="jumbotron">
      <form style={formStyle} >
  <fieldset>
    <div className="form-group">
      <label for="inputForTitle">Bounty Title</label>
      <input type="title" className="form-control" id="bountyTitle" aria-describedby="bountyTitle" placeholder="Bounty Title"></input>
      
    </div>
    <div className="form-group">
      <label for="bountyInformation">Bounty Information</label>
      <textarea className="form-control" id="bountyTextArea" rows="3"></textarea>
    </div>
    <div className="form-group">
      <label for="bountyInputFile">File input</label>
      <input type="file" className="form-control-file" id="bountyInputFile" aria-describedby="fileHelp"></input>
      </div>
    
    <button type="submit" className="btn btn-dark">Submit</button>
  </fieldset>
</form>
      </div>
      </div>
    );
  }
}

export default Bounty;

// <legend>Legend</legend>
// <small id="fileHelp" className="form-text text-muted">{"This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line."}</small>
// 
// <div className="form-group">
//   <label for="bountySelect1">bounty select</label>
//   <select className="form-control" id="bountySelect1">
//     <option>1</option>
//     <option>2</option>
//     <option>3</option>
//     <option>4</option>
//     <option>5</option>
//   </select>
// </div>
// <div className="form-group">
//   <label for="bountySelect2">bounty multiple select</label>
//   <select multiple="" className="form-control" id="bountySelect2">
//     <option>1</option>
//     <option>2</option>
//     <option>3</option>
//     <option>4</option>
//     <option>5</option>
//   </select>
// </div>

import React from 'react';

class SearchBar extends React.Component {

   state = { text: '' }

   onFormSubmit = e => {
      e.preventDefault();
      this.props.onFormSubmit(this.state.text);
   }

   render() {
      return (
         <div className="ui segment search-bar">
            <form className="ui form" onSubmit={this.onFormSubmit} >
               <div className="field">
                  <label>Search for some video...</label>
                  <input
                     type="text"
                     value={this.state.text}
                     onChange={e => this.setState({ text: e.target.value })}
                  />
               </div>
            </form>
         </div>
      );
   }

}

export default SearchBar;
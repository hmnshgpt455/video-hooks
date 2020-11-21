import React, { useState } from 'react';

const SearchBar = props => {

   const [text, setText] = useState('');

   const onFormSubmit = e => {
      e.preventDefault();
      props.onFormSubmit(text);
   };

   return (
      <div className="ui segment search-bar">
         <form className="ui form" onSubmit={onFormSubmit} >
            <div className="field">
               <label>Search for some video...</label>
               <input
                  type="text"
                  value={text}
                  onChange={e => setText(e.target.value)}
               />
            </div>
         </form>
      </div>
   );
}

export default SearchBar;
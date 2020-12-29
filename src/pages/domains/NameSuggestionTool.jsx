import React, { useState, useEffect} from "react";

function NameSuggestionTool() {

    const [suggestions, setSuggestions] = useState({});

    useEffect(() => {
        fetch(`/api/domains/v5/suggest-names.json?auth-userid=795300&api-key=sOZ7I52D5Jx8Vtbkxfnn1PYIVoqL0D5O&keyword=himanshu`)
        .then((response) => response.json())
        .then(setSuggestions);
  }, []);

  const suggestionArray = [];
  for (let suggestion in suggestions) {
    let status = suggestions[suggestion];
    suggestionArray.push({
        name: suggestion,
        children: status
    });
  }

//   console.log(suggestionArray);
  
    return(
        <div>
            {suggestionArray.map((suggest) => {
                return(
                    <div  key={suggest.name} >
                    <p>{suggest.name}</p>
                    <p className="nb-text-primary-green">{suggest.children.status}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default NameSuggestionTool;

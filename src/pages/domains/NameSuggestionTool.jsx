import React, { useState, useEffect} from "react";

function NameSuggestionTool() {

    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        fetch(`/api/domains/v5/suggest-names.json?auth-userid=795300&api-key=sOZ7I52D5Jx8Vtbkxfnn1PYIVoqL0D5O&keyword=rohit`)
        .then((response) => response.json())
        .then(setSuggestions);
  }, []);

  var as = JSON.parse(suggestions);
    return(
        <div>
            {as}
        </div>
    )
}
export default NameSuggestionTool;

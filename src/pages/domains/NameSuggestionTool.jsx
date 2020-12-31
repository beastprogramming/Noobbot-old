import React, { useState, useEffect} from "react";

import {useForm} from "react-hook-form";

import {Link} from 'react-router-dom';

function NameSuggestionTool() {
    // Get form data form
    const {register, handleSubmit} = useForm();

    const onSubmit = (keyword) => {
        console.log(keyword);
    }
    // Fetch Data From API
    const [suggestions, setSuggestions] = useState({});
    useEffect(() => {
        fetch(`/api/domains/v5/suggest-names.json?auth-userid=795300&api-key=sOZ7I52D5Jx8Vtbkxfnn1PYIVoqL0D5O&keyword=noobbot`)
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

  
    return(
        <>
            

            <section className="nb-py-4">
                <div className="nb-container nb-mt-16 nb-mb-4">
                    <div className="nb-text-center nb-my-12">
                        <h2 className="nb-text-2xl md:nb-text-3xl lg:nb-text-4xl nb-font-bold nb-text-primary-bunty nb-tracking-wide nb-leading-tight nb-mb-2">Domain Name Suggestion Tool</h2>
                        <h3 className="nb-text-sm md:nb-text-md lg:nb-text-lg nb-font-medium nb-text-primary-bunty nb-mb-2">This tool will help you find and register good domain names. Enter the word / phrase / domain name that you are looking for in the below search box and click on the <span className="nb-text-primary-red">"Suggest"</span> Button to generate a list of suggested domain names. To specify multiple words or phrases use a space between words. </h3>
                    </div>

                    <div className="nb-mb-4">
                    <form className="nb-w-full nb-flex nb-flex-col md:nb-flex-row md:nb-items-center" onSubmit={handleSubmit(onSubmit)}>
                        <input
                            className="nb-rounded-l nb-w-full nb-h-16 nb-border-primary-blue focus:nb-border-primary-blue focus:nb-outline-0 nb-border-2 nb-border-r-2 md:nb-border-r-0 nb-p-2 nb-bg-transparent focus:nb-bg-transparent nb-text-primary-bunty nb-text-xl nb-mb-2 md:nb-mb-0"
                            type="text" name="domain" placeholder="Add your keyword" autoComplete="off" ref={register} />
                        <input
                            className="nb-rounded-r nb-h-16 nb-border-primary-blue nb-border-2 nb-p-2 nb-text-xl nb-font-bold nb-bg-primary-blue nb-text-white nb-cursor-pointer"
                            type="submit" value="Suggest" />
                    </form>
                </div>
                </div>
            </section>
            <section className="nb-py-4">
                <div className="nb-container">
                    <div className="nb-text-center nb-mb-4">
                        <h2 className="nb-text-lg md:nb-text-xl lg:nb-text-2xl nb-font-medium nb-text-primary-bunty nb-mb-2">Best Domains for <span className="nb-font-bold nb-text-primary-red">youtube</span></h2>
                    </div>

                    <div className="nb-grid nb-grid-cols-1 lg:nb-grid-cols-2 nb-gap-4">
                    {suggestionArray.map((suggest) => {
                        return(
                            <div key={suggest.name} className="nb-flex nb-flex-col lg:nb-flex-row nb-justify-between nb-items-center nb-p-2 nb-bg-light-green">
                                <div className="nb-flex nb-items-center">
                                    <i className="nb-text-primary-green nb-mr-2 la la-check nb-font-bold"></i>
                                    <p className="nb-text-primary-bunty nb-font-bold nb-text-md">{suggest.name}</p>
                                </div>
                                <Link to="#" title="" className="nb-p-1 nb-text-primary-bunty nb-font-medium hover:nb-text-primary-blue nb-text-sm" >View Details</Link>
                            </div>
                        )
                    })}
                    </div>
                </div>
            </section>
        </>
    )
}
export default NameSuggestionTool;

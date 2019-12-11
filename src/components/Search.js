
import React, { useState } from 'react'
import { withApollo } from 'react-apollo'
import gql from 'graphql-tag'
import Link from './Link'

const Search = () => {

    const [ links, setLinks ] = useState([])
    const [ filter, setFilter ] = useState('')

    const _executeSearch = async () => {
        // .. youll complete this later
    }

    return (
        <div>
            <div>
                Search
                <input
                    type='text'
                    onChange={e => setFilter( e.target.value )}
                />
                <button onClick={() => _executeSearch()}>OK</button>
            </div>
            {links.map((link, index) => (
                <Link 
                    key={link.id} 
                    link={link} 
                    index={index}
                />
            ))}
        </div>
    )
}

export default withApollo(Search)
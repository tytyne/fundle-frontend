import React, { useState, useEffect } from 'react';
import jsonFile from "./company.json"
import {
    
    Input,
   
    Card,
  } from "semantic-ui-react"
export default function Posts() {
    const [APIData, setAPIData] = useState([])
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);

 
   //Fetch dataaa  
   console.log("check json file",jsonFile) 

   useEffect(() => {
 
            setAPIData(jsonFile);
        
}, [])



    const searchData = (value) => {
        setSearchTerm(value)
        if (searchTerm !== '') {
            const filteredData = APIData.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchTerm.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else {
            setFilteredResults(APIData)
        }
    }

    return (
        <div style={{ padding: 20 }}>
            <Input icon='search'
                placeholder='Search...'
                onChange={(e) => searchData(e.target.value)}
            />
            <Card.Group itemsPerRow={3} style={{ marginTop: 20 }}>
                {searchTerm.length > 1 ? (
                    filteredResults.map((item) => {
                        return (
                            <Card>
                                <Card.Content>
                                    <Card.Header>{item.name}</Card.Header>
                                    <Card.Description>
                                    {item.domain}
                                    <h5>{item.location}</h5>

                                    <a href={item.link} target="_blank">Visit Site</a>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        )
                    })
                ) : (
                    APIData.map((item) => {
                        return (
                            <Card>
                                <Card.Content>
                                    <Card.Header>{item.name}</Card.Header>
                                    <Card.Description> 
                                    <h4>Location:{item.location}</h4>
                                        <h5>{item.domain}</h5>

                                        <a href={item.link} target="_blank">Visit Site</a>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        )
                    })
                )}
            </Card.Group>
        </div>
    )
}
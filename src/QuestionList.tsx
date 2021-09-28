import React from "react";
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';

import Question from './Question1';


import {
    useQuery,
    gql
  } from "@apollo/client";
  
  
  const GET_ALL_QUESTIONS = gql`
  
  query getAllQuestions{
      allQuestions{
        
        edges{
          
          node{
            id
            questionText
            pubDate
            choiceSet{
              edges{
                node{
                  id
                  choiceText
                  votes
                  
                }
              }
            }
          }
        }
      }
    }
  `
  
const QuestionList= () =>{
    const { loading, data } = useQuery(GET_ALL_QUESTIONS);
    console.log(data);


    return(
        <Card>
        {
            loading && <p>
              Loading ...
            </p>
          }
          {
            !loading &&
            <CardContent>
              <Stack spacing={2}>
                {data.allQuestions.edges.map((edge: any) => (
                  <Question key={edge.id}
                    text={edge.node.questionText} pubDate={edge.node.pubDate} choices={edge.node.choiceSet.edges}
    
    
                  />
    
    
                ))}
    
    
              </Stack>
    
            </CardContent>
          }
          </Card>
    )
}
export default QuestionList;
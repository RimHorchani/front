import React, { useEffect } from "react";
import DateTimePicker from '@mui/lab/DateTimePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import FormControl from '@mui/material/FormControl';
import { Card } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import {
    useMutation,
    gql
} from "@apollo/client";
import moment from 'moment';
const CREATE_QESTION = gql`
mutation createQuestion($input: CreateQuestionInput!) {
    createQuestion(input: $input) {
      newQuestion {
        id
      }
    }
  }
  
`

const QuestionForm = ({...props}) => {
    const [value, setValue] = React.useState<Date | null>(null);
    const [qtext, setQtext] = React.useState("");
    const [createQuestion] = useMutation(CREATE_QESTION, {
        variables: {
            input: {
                newQuestion: {
                    questionText: qtext,
                    pubDate: moment(value).format("YYYY-MM-DD"),
                }
            }

        }
    })
   
    useEffect(()=>{
        if (props.save){
            createQuestion();
            props.isSaved();
        }

    },[]) 


    return (

        <Card >
            <CardHeader title="Create new question" />
            <CardContent>
                <FormControl sx={{ width: '25ch', margin: 2 }}>
                    <TextField
                        type="text"
                        label="Your question text:"
                        value={qtext}
                        onChange={(e) => {
                            setQtext(e.target.value)
                        }}

                    />
                </FormControl>
                <FormControl>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>

                        <DateTimePicker
                            label="Publication date :"

                            value={value}
                            onChange={(newValue) => {
                                console.log(moment(newValue).format("yyyy-MM-DD"))
                                setValue(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </FormControl>

            </CardContent>


        </Card>


    )
}
export default QuestionForm;
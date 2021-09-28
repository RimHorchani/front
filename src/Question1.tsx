import React from 'react';

import { Card } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const Question = ({ ...props }) => {





    return (
        <Card>
            <CardHeader title={props.text} subheader={props.pubDate} />
            <CardContent>
                <Stack>
                    {props.choices.map((choice: any) => (
                        <Item key={choice.id}>
                            <Checkbox sx={{
                                width: 30,
                                height: 30,
                                marginLeft: -20,
                                bgcolor: 'Highlight',
                                '&:hover': {
                                    backgroundColor: 'primary.main',
                                    opacity: [0.9, 0.8, 0.7],
                                },
                            }}></Checkbox>
                            <div style={{ marginTop: -40 }}>
                                <h4>{choice.node.choiceText}</h4>
                                <h4>{choice.node.choiceText}</h4>
                            </div></Item>


                    ))}






                </Stack>
            </CardContent>
        </Card>
    )

}
export default Question;
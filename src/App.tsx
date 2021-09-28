import * as React from 'react';
import { useState } from 'react';
import './App.css';
import { Button, CardActions, CardContent } from '@mui/material';
import { Card } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import {
  useHistory,
  Redirect,
  Switch,
  Route,
  Link
} from "react-router-dom";
import QuestionList from './QuestionList';
import QuestionForm from './QuestionForm';


const App = () => {
  const history = useHistory();
  const back = () => {
    history.push("/list");
    setIsNew(false)
  }
  const [isNew, setIsNew] = useState(false);
  const [save, setSave] = useState(false);
  const onSave = () => {
    setSave(true);
  }
  const isSaved = () => {
    setSave(false)
  }

  return (
    <Card style={{ maxWidth: 345, margin: 'auto' }} >
      <CardHeader title="Polls"></CardHeader>

      <CardContent>

        <Switch>
          <Route exact path="/">
            <Redirect to="/list" />
          </Route>
          <Route path="/list">
            <QuestionList />
          </Route>
          <Route path="/question">
            <QuestionForm save={save} isSaved={isSaved}/>
          </Route>

        </Switch>

      </CardContent>

      <CardActions>
        <Button style={isNew ? { display: 'flex' } : { display: 'none' }} onClick={onSave} >Save</Button>
        <Button>
          <Link to="/question" style={!isNew ? { display: 'flex' } : { display: 'none' }} onClick={() => setIsNew(true)}>
            Add Question
          </Link>
        </Button>
        <Button onClick={back} style={isNew ? { display: 'flex' } : { display: 'none' }}>

          Return

        </Button>
      </CardActions>



    </Card>





  );
}

export default App;

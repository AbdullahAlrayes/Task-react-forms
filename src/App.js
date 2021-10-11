import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Form from './Components/Form';
import HeaderAndTitle from './Components/HeaderAndTitle';
import StudentsList from './Components/StudentsList';

function App() {
  const [studentsInfo, setStudentsInfo] = useState([]);
  const [show, setShow] = useState(false);

  const addStudent = (student) => {
    setStudentsInfo([...studentsInfo, student]);
    console.log(studentsInfo);
  };

  const deleteStudent = (mobile) => {
    const list = studentsInfo.filter((student) => student.mobile !== mobile);
    setStudentsInfo(list);
  };

  return (
    <div className="App">
      <HeaderAndTitle showList={setShow} show={show} />
      {show ? (
        <StudentsList list={studentsInfo} deleteStudent={deleteStudent} />
      ) : (
        <Form addStudent={addStudent} />
      )}
    </div>
  );
}

export default App;

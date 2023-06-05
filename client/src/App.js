import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

// importing pages
import Landingpage from "./pages/Langingpage";

//components
import Accountstudent from "./components/Accountstudent";
import Accountteacher from "./components/Accountteacher";

// importing all admin pages
import Adminhomepage from "./pages/adminpages/Adminhomepage";
import Adminloginpage from "./pages/adminpages/Adminloginpage";
import Addstudentpage from "./pages/adminpages/Addstudentpage";
import Addteacherpage from "./pages/adminpages/Addteacherpage";
import Editstudentpage from "./pages/adminpages/Editstudentpage";
import Editteacherpage from "./pages/adminpages/Editteacherpage";
import Addbranchpage from "./pages/adminpages/Addbranchpage";
import Addtimetablepage from "./pages/adminpages/Addtimetablepage";
import Viewstudentpage from "./pages/adminpages/Viewstudentpage";
import Viewteacherpage from "./pages/adminpages/Viewteacherpage";
import Viewstudentdetailspage from "./pages/adminpages/Viewstudentdetailspage";

// importing all teacher pages
import Teacherhomepage from "./pages/teacherpages/Teacherhomepage";
import Teacherloginpage from "./pages/teacherpages/Teacherloginpage";
import Addattendencepage from "./pages/teacherpages/Addattendencepage";
import Viewstudentattendencepage from "./pages/teacherpages/Viewstudentattendencepage";
import Acceptattendencepage from "./pages/teacherpages/Acceptattendencepage";
import Dummyattendencepage from "./pages/teacherpages/Dummyattendencepage";
import Viewtimetablepaget from "./pages/teacherpages/Viewtimetablepage";

//importing all student pages
import Studenthomepage from "./pages/studentpages/Studenthomepage";
import Studentloginpage from "./pages/studentpages/Studentloginpage";
import Viewattendencepage from "./pages/studentpages/Viewattendencepage";
import Viewtimetablepage from "./pages/studentpages/Viewtimetablepage";

import { Message, useToaster, ButtonToolbar, SelectPicker, Button } from 'rsuite';

const Success = () => {
  const [type, setType] = React.useState('info');
  const [placement, setPlacement] = React.useState('topCenter');
  const toaster = useToaster();

  const message = (
    <Message showIcon type={type} closable>
      {type}: The message appears on the {placement}.
    </Message>
  );

  return (
    <div>
      {message}
      <hr />
      <ButtonToolbar>
        <SelectPicker
          cleanable={false}
          value={type}
          data={[
            { label: 'info', value: 'info' },
            { label: 'success', value: 'success' },
            { label: 'warning', value: 'warning' },
            { label: 'error', value: 'error' }
          ]}
          onChange={setType}
          style={{ width: 200 }}
        />
        <SelectPicker
          cleanable={false}
          value={placement}
          data={[
            { label: 'topStart', value: 'topStart' },
            { label: 'topCenter', value: 'topCenter' },
            { label: 'topEnd', value: 'topEnd' },
            { label: 'bottomStart', value: 'bottomStart' },
            { label: 'bottomCenter', value: 'bottomCenter' },
            { label: 'bottomEnd', value: 'bottomEnd' }
          ]}
          onChange={setPlacement}
          style={{ width: 200 }}
        />
        <Button onClick={() => toaster.push(message, { placement, duration: 5000 })}>Push</Button>
        <Button onClick={() => toaster.remove()}>Remove</Button>
        <Button onClick={() => toaster.clear()}>Clear</Button>
      </ButtonToolbar>
    </div>
  );
};


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/aa" Component={Success}  />
        <Route path="/" Component={Landingpage}  />
        <Route path="/admin" Component={Adminhomepage} />
        <Route path="/adminlogin" Component={Adminloginpage} />
        <Route path="/admin/addstudent" Component={Addstudentpage} />
        <Route path="/admin/addteacher" Component={Addteacherpage} />
        <Route path="/admin/editstudent" Component={Editstudentpage} />
        <Route path="/admin/editteacher" Component={Editteacherpage} />
        <Route path="/admin/addbranch" Component={Addbranchpage} />
        <Route path="/admin/addtimetable" Component={Addtimetablepage} />
        <Route path="/admin/viewstudent" Component={Viewstudentpage} />
        <Route
          path="/admin/viewstudent/details"
          Component={Viewstudentdetailspage}
        />
        <Route path="/admin/viewteacher" Component={Viewteacherpage} />
        <Route path="/teacher" Component={Teacherhomepage} />
        <Route path="/teacherlogin" Component={Teacherloginpage} />
        <Route path="/teacheraccountcreate" Component={Accountteacher} />
        <Route path="/teacher/addattendence" Component={Addattendencepage} />
        <Route
          path="/teacher/viewstudentattendence"
          Component={Viewstudentattendencepage}
        />
        <Route
          path="/teacher/acceptattendence"
          Component={Acceptattendencepage}
        />
        <Route
          path="/teacher/dummyattendence"
          Component={Dummyattendencepage}
        />
        <Route path="/teacher/viewtimetable" Component={Viewtimetablepaget} />
        <Route path="/student" Component={Studenthomepage} />
        <Route path="/studentlogin" Component={Studentloginpage} />
        <Route path="/studentaccountcreate" Component={Accountstudent} />
        <Route path="/student/viewattendence" Component={Viewattendencepage} />
        <Route path="/student/viewtimetable" Component={Viewtimetablepage} />
      </Routes>
    </div>
  );
}

export default App;

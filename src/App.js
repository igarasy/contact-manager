import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import AddContact from './Components/contacts/AddContact/AddContact';
import ContactList from './Components/contacts/ContactList/ContactList';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path={'/'} element={<Navigate to={'contact/list'} />} />
        <Route path={'/contact/list'} element={<ContactList />} />
        <Route path={'/contacts/add'} element={<AddContact />} />
        <Route path={'/contacts/view/:contactId'} element={<AddContact />} />
      </Routes>
    </>
  );
}

export default App;

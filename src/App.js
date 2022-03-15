import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import AddContact from './Components/contacts/AddContact/AddContact';
import ContactList from './Components/contacts/ContactList/ContactList';
import EditContact from './Components/contacts/EditContact/EditContact';
import ViewContact from './Components/contacts/ViewContact/ViewContact';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path={'/'} element={<Navigate to={'contact/list'} />} />
        <Route path={'/contact/list'} element={<ContactList />} />
        <Route path={'/contacts/add'} element={<AddContact />} />
        <Route path={'/contacts/view/:contactId'} element={<ViewContact />} />
        <Route path={'/contacts/edit/:contactId'} element={<EditContact />} />
      </Routes>
    </>
  );
}

export default App;

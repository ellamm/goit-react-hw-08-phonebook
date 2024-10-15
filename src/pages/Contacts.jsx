import { useSelector } from 'react-redux';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { selectLoading } from 'redux/contacts/selectors';
import { Loader } from '../components/Loader/Loader';

export default function Tasks() {
  const isLoading = useSelector(selectLoading);

  return (
    <>
      <title>Your contacts</title>
      <ContactForm /> {}
      <div>{isLoading && <Loader />}</div>{' '}
      {}
      <ContactList /> {}
    </>
  );
}

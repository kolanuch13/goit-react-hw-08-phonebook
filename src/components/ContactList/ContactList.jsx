import css from './ContactList.module.css';
import {getContacts, getFilter} from "redux/contacts/selectors";
import { deleteContact } from 'redux/contacts/operations';
import { useDispatch, useSelector } from "react-redux";
import {
    Button,
} from '@chakra-ui/react';



const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = contacts.filter(
    contact => contact.name.toLowerCase().includes(filter.toLowerCase())
  );

    return (
      <ul className={css.contactList}>
        {filteredContacts.map(contact => {
          const handleDelete = () => dispatch(deleteContact(contact.id));
          let markup = (
            <li key={contact.id} className={css.contactItem}>
              <span>
                {contact.name}: <a type='tel'>{contact.number}</a>
              </span>
              <Button
                type="button"
                onClick={handleDelete}
                id={contact.id}
                className={css.contactButton}
              >
                Delete
              </Button>
            </li>
          );
          return markup;
        })}
      </ul>
    );
}

export default ContactList;

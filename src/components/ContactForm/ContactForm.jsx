import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { getContacts } from 'redux/contacts/selectors';
import {
    Input,
    Button,
    FormControl,
    FormLabel,
} from '@chakra-ui/react';


const ContactForm =  () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const require = contacts.filter(contact => contact.name.toLowerCase() === form.elements.name.value);

        if (require.length === 0) {
            dispatch(
              addContact({
                name: form.elements.name.value,
                number: form.elements.number.value,
              })
            );
                } else {
                    alert(`${form.elements.name.value} already is on contacts.`);
                }
                form.reset();
            }
            return (
                <div>
                    <form action="" onSubmit={handleSubmit} id="myform">
                        <FormControl>
                          <FormLabel>
                              Name
                              <Input
                                  type="text"
                                  name="name"
                                  pattern="^[a-zA-Z]+\s[a-zA-Z]+$"
                                  placeholder="Clarck Kent"
                                  required
                              />
                          </FormLabel>
                          <FormLabel>
                              Number
                              <Input
                                  type="text"
                                  name="number"
                                  placeholder="+380111111111"
                                  required
                              />
                          </FormLabel>
                          <Button
                              type="submit"
                              as="button"
                              p={4}
                              color="white"
                              fontWeight="bold"
                              borderRadius="md"
                              bgGradient="linear(to-r, teal.500, green.500)"
                              _hover={{
                                  bgGradient: 'linear(to-r, red.500, yellow.500)',
                              }}
                          >
                              Add contact
                          </Button>
                        </FormControl>
                    </form>
                </div>
            );  
}

export default ContactForm;
